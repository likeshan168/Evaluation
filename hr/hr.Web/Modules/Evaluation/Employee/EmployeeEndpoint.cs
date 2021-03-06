﻿
namespace hr.Evaluation.Endpoints
{
    using hr.Administration.Entities;
    using hr.Administration.Repositories;
    using hr.Evaluation.Repositories;
    using hr.Modules.Common.Helpers;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.EmployeeRepository;
    using MyRow = Entities.EmployeeRow;

    [RoutePrefix("Services/Evaluation/Employee"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EmployeeController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //TODO: 员工删除之后需要做的事情？
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public Result<ServiceResponse> AddEmployeeToUsers(TransferEmployeeRequest request)
        {
            //var filter = new Dictionary<string, object>();
            //var criteria = new Criteria()
            return this.UseConnection("Default", connection =>
            {
                var query = new SqlQuery().Dialect(connection.GetDialect())
                .Select("*")
                .From("hr.Employee")
                .Where(new Criteria("[Id]")
                .In(request.Ids.ToArray()));

                var employees = connection.Query<MyRow>(query);

                using (var uow = new UnitOfWork(connection))
                {
                    var fld = UserRow.Fields;
                    foreach (MyRow item in employees)
                    {
                        var existedUser = connection.Query<UserRow>($"select * from dbo.users where Username='{item.Name}';").FirstOrDefault();
                        if (existedUser != null)
                        {
                            //存在的话，应该更新以下用户信息
                            connection.Execute($"update dbo.users set Email='{item.Email}', LastDirectoryUpdate='{DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")}' where Username='{item.Name}';");
                            continue;
                        }

                        string salt = null;
                        var displayName = item.Name;
                        var email = item.Email;
                        var username = item.Name;

                        var hash = UserRepository.GenerateHash(PinYinConverter.Get(username), ref salt);

                        var userId = (int)connection.InsertAndGetID(new UserRow
                        {
                            Username = username,
                            Source = "site",
                            DisplayName = displayName,
                            Email = email,
                            PasswordHash = hash,
                            PasswordSalt = salt,
                            IsActive = 1,
                            InsertDate = DateTime.Now,
                            InsertUserId = int.Parse(((UserDefinition)Serenity.Authorization.UserDefinition).Id),
                            LastDirectoryUpdate = DateTime.Now
                        });
                        //添加用户到上下级
                        new LeaderShipRepository().Create(uow, new SaveRequest<Entities.LeaderShipRow>()
                        {
                            Entity = new Entities.LeaderShipRow { UserId = userId }
                        });
                    }

                    uow.Commit();
                }
                //var employees = EntitySqlHelper.List<MyRow>(query, connection);

                return new ServiceResponse();

            });
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new Serenity.Reporting.DynamicDataReport(data, request.IncludeColumns, typeof(Columns.EmployeeColumns));
            var bytes = new ReportRepository().Render(report);
            return Serenity.Web.ExcelContentResult.Create(bytes, "Employee_" +
                System.DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
