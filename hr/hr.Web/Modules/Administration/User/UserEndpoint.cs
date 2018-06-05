

namespace hr.Administration.Endpoints
{
    using Entities;
    using hr.Evaluation.Repositories;
    using Repositories;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserRepository;
    using MyRow = Entities.UserRow;

    [RoutePrefix("Services/Administration/User"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res = new MyRepository().Create(uow, request);
            new LeaderShipRepository().Create(uow, new SaveRequest<Evaluation.Entities.LeaderShipRow>()
            {
                Entity = new Evaluation.Entities.LeaderShipRow { UserId = int.Parse(res.EntityId.ToString()) }
            });
            return res;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse BatchUpdate(IUnitOfWork uow, BatchUpdateUserRequest request)
        {
            return new MyRepository().BatchUpdate(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {

            //1. 删除领导关系  2. 删除角色 3. 删除配置关系 4. 删除考核结果
            int userId = int.Parse(request.EntityId.ToString());
            uow.Connection.Execute($"delete from hr.LeaderShip where UserId={userId};update [hr].[LeaderShip] set ParentUserId=null where ParentUserId={userId};delete from dbo.UserRoles where UserId={userId};delete from hr.UserEvaluationRelation where UserId={userId};delete from hr.UserEvaluationToUser where UserId={userId};delete from hr.EvaluationResultDetail where UserId={userId} or EvaluationUserId={userId};");

            var res = new MyRepository().Delete(uow, request);
            return res;
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        private static string[] permissionsUsedFromScript;

        /// <summary>
        /// This declares a dynamic script with key 'UserData' that will be available from client side.
        /// We don't cache it at dynamic script manager, because dynamic scripts are cached globally,
        /// similar to static variables, not per user.
        /// </summary>
        [NonAction, DataScript("UserData", CacheDuration = -1), ServiceAuthorize]
        public ScriptUserDefinition GetUserData(IDbConnection connection)
        {
            var result = new ScriptUserDefinition();

            if (!(Authorization.UserDefinition is UserDefinition user))
            {
                result.Permissions = new Dictionary<string, bool>();
                return result;
            }

            result.Username = user.Username;
            result.DisplayName = user.DisplayName;
            result.IsAdmin = user.Username == "admin";
            var userEntity = connection.Query($"select u.DepartmentId, d.Name as DepartmentName from dbo.[Users] u left join hr.department d on d.Id = u.DepartmentId where UserId={user.UserId};").FirstOrDefault();
            if (userEntity?.DepartmentId != null)
            {
                result.DepartmentId = userEntity.DepartmentId;
                result.DepartmentName = userEntity.DepartmentName;
            }
            //else
            //{
            //    if (!result.IsAdmin)
            //    {
            //        throw new ValidationError("你无权查看任何信息，因为没有找到你所属的部门信息");
            //    }
            //}

            result.Permissions = TwoLevelCache.GetLocalStoreOnly("ScriptUserPermissions:" + user.Id, TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                {
                    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    if (permissionsUsedFromScript == null)
                    {
                        permissionsUsedFromScript = new UserPermissionRepository().ListPermissionKeys().Entities
                            .Where(permissionKey =>
                            {
                                // this sends permission information for all permission keys to client side.
                                // if you don't need all of them to be available from script, filter them here.
                                // this is recommended for security / performance reasons...
                                return true;
                            }).ToArray();
                    }

                    foreach (var permissionKey in permissionsUsedFromScript)
                    {
                        if (Authorization.HasPermission(permissionKey))
                            permissions[permissionKey] = true;
                    }

                    return permissions;
                });

            return result;
        }
    }
}
