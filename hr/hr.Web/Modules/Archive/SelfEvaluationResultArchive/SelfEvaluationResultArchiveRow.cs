﻿
namespace hr.Archive.Entities
{
    using hr.Evaluation.EvaluationFinalResult;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[SelfEvaluationResult_Archive]"), DisplayName("Self Evaluation Result Archive"), InstanceName("Self Evaluation Result Archive"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class SelfEvaluationResultArchiveRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Exam Title"), Size(200), NotNull, QuickSearch]
        [LookupEditor(typeof(ExamTitleLookup))]
        public String ExamTitle
        {
            get { return Fields.ExamTitle[this]; }
            set { Fields.ExamTitle[this] = value; }
        }

        [DisplayName("User Name"), Size(30), NotNull]
        [LookupEditor(typeof(ExamUserLookup)), QuickSearch]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Exam Content"), Size(4000), NotNull]
        public String ExamContent
        {
            get { return Fields.ExamContent[this]; }
            set { Fields.ExamContent[this] = value; }
        }

        [DisplayName("Input Content"), Size(-1)]
        public String InputContent
        {
            get { return Fields.InputContent[this]; }
            set { Fields.InputContent[this] = value; }
        }

        [DisplayName("Department Name"), Size(30)]
        [LookupEditor(typeof(DepartmentNameLookup)), QuickSearch]
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
            get { return Fields.ExamTitle; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SelfEvaluationResultArchiveRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField ExamTitle;
            public StringField UserName;
            public StringField ExamContent;
            public StringField InputContent;
            public StringField DepartmentName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Archive.SelfEvaluationResultArchive";
            }
        }
    }
}
