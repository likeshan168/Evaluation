
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[Employee]"), DisplayName("Employee"), InstanceName("Employee"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Employee.View)]
    [ModifyPermission(PermissionKeys.Employee.Modify)]
    public sealed class EmployeeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, SortOrder(1, false)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Id Card"), Size(50)]
        public String IdCard
        {
            get { return Fields.IdCard[this]; }
            set { Fields.IdCard[this] = value; }
        }

        //[DisplayName("Gender"), Size(10), RadioButtonEditor(typeof(GenderType))]
        [DisplayName("Gender"), Size(10)]

        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get { return Fields.BirthDate[this]; }
            set { Fields.BirthDate[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Department"), ForeignKey("[hr].[Department]", "Id"), LeftJoin("jDepartment"), TextualField("DepartmentName")]
        [LookupEditor(typeof(DepartmentRow), InplaceAdd = true)]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Remark"), Size(400)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [DisplayName("Department Name"), Expression("jDepartment.[Name]")]
        public String DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField IdCard;
            public StringField Gender;
            public DateTimeField BirthDate;
            public StringField Email;
            public Int32Field DepartmentId;
            public StringField Remark;

            public StringField DepartmentName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.Employee";
            }
        }
    }
}
