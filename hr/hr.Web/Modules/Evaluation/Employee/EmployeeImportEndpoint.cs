
namespace hr.Evaluation.Endpoints
{
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using MyRow = Entities.EmployeeRow;
    using System.Linq;
    using hr;
    using hr.Evaluation.Repositories;

    [RoutePrefix("Services/Evaluation/EmployeeImport"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize]
    public class EmployeeImportController : ServiceEndpoint
    {
        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var p = MyRow.Fields;


            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            if (ep.Workbook.Worksheets.Count == 0)
            {
                response.ErrorList.Add("The Excel file doesn't cantain any sheet");
                return response;
            }
            var worksheet = ep.Workbook.Worksheets[1];

            bool isCreat = false;
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    // every circulation should reset the flag
                    isCreat = false;
                    // check the productno is empty or not
                    var name = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    if (name.IsTrimmedEmpty())
                        continue;
                    // search the productno whether existes in the database
                    //var employee = uow.Connection.TryFirst<MyRow>(q => q
                    //    .Select(p.Name)
                    //    .Where(p.Name == name));

                    var employee = uow.Connection.Query<MyRow>($"select * from hr.Employee where Name='{name}'").FirstOrDefault();

                    if (employee == null)
                    {
                        employee = new MyRow
                        {
                            Name = name
                        };

                        isCreat = true;
                    }
                    else
                    {
                        // avoid assignment errors
                        employee.TrackWithChecks = false;
                        isCreat = false;
                    }

                    employee.IdCard = Convert.ToString(worksheet.Cells[row, 2].Value ?? string.Empty);
                    employee.Gender = worksheet.Cells[row, 3].GetValue<string>();

                    if (!string.IsNullOrWhiteSpace(Convert.ToString(worksheet.Cells[row, 4].Value)))
                    {
                        employee.BirthDate = worksheet.Cells[row, 4].GetValue<DateTime>();
                    }

                    employee.Email = Convert.ToString(worksheet.Cells[row, 5].Value ?? string.Empty);
                    if (isCreat)
                    {
                        new EmployeeRepository().Create(uow, new SaveRequest<MyRow>
                        {
                            Entity = employee
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new EmployeeRepository().Update(uow, new SaveRequest<MyRow>
                        {
                            Entity = employee,
                            EntityId = employee.Id
                        });

                        response.Updated = response.Updated + 1;
                    }
                }
                catch (Exception ex)
                {
                    ex.Log();
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }
    }
}
