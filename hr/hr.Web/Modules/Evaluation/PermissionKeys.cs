using Serenity.Extensibility;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    [NestedPermissionKeys]
    [DisplayName("Evaluation")]
    public class PermissionKeys
    {
        //[DisplayName("Department")]
        //public class Department
        //{
        //    public const string Delete = "Evaluation:Department:Delete";
        //    public const string Modify = "Evaluation:Department:Modify";
        //    public const string View = "Evaluation:Department:View";
        //}
        //[DisplayName("Employee")]
        //public class Employee
        //{
        //    public const string Delete = "Evaluation:Employee:Delete";
        //    public const string Modify = "Evaluation:Employee:Modify";
        //    public const string View = "Evaluation:Employee:View";
        //}
        [DisplayName("EvaluationItem")]
        public class EvaluationItem
        {
            public const string Delete = "Evaluation:EvaluationItem:Delete";
            public const string Modify = "Evaluation:EvaluationItem:Modify";
            public const string View = "Evaluation:EvaluationItem:View";
        }
        [DisplayName("CompanyEvaluation")]
        public class CompanyEvaluation
        {
            public const string Delete = "Evaluation:CompanyEvaluation:Delete";
            public const string Modify = "Evaluation:CompanyEvaluation:Modify";
            public const string View = "Evaluation:CompanyEvaluation:View";
        }

        [DisplayName("Exam")]
        public class Exam
        {
            public const string Delete = "Evaluation:Exam:Delete";
            public const string Modify = "Evaluation:Exam:Modify";
            public const string View = "Evaluation:Exam:View";
        }
        [DisplayName("FirstKpi")]
        public class FirstKpi
        {
            public const string Delete = "Evaluation:FirstKpi:Delete";
            public const string Modify = "Evaluation:FirstKpi:Modify";
            public const string View = "Evaluation:FirstKpi:View";
        }
        [DisplayName("SecondKpi")]
        public class SecondKpi
        {
            public const string Delete = "Evaluation:SecondKpi:Delete";
            public const string Modify = "Evaluation:SecondKpi:Modify";
            public const string View = "Evaluation:SecondKpi:View";
        }
        //[DisplayName("ToDoList")]
        //public class ToDoList
        //{
        //    public const string Delete = "Evaluation:ToDoList:Delete";
        //    public const string Modify = "Evaluation:ToDoList:Modify";
        //    public const string View = "Evaluation:ToDoList:View";
        //}
        [DisplayName("UserEvaluationRelation")]
        public class UserEvaluationRelation
        {
            public const string Delete = "Evaluation:UserEvaluationRelation:Delete";
            public const string Modify = "Evaluation:UserEvaluationRelation:Modify";
            public const string View = "Evaluation:UserEvaluationRelation:View";
        }

        [DisplayName("EvaluationFinalResult")]
        public class EvaluationFinalResult
        {
            public const string Delete = "Evaluation:EvaluationResult:Delete";
            public const string Modify = "Evaluation:EvaluationResult:Modify";
            public const string View = "Evaluation:EvaluationResult:View";

        }
        [DisplayName("EvaluationResultDetail")]
        public class EvaluationResultDetail
        {
            public const string Delete = "Evaluation:EvaluationResultDetail:Delete";
            public const string Modify = "Evaluation:EvaluationResultDetail:Modify";
            public const string View = "Evaluation:EvaluationResultDetail:View";

        }
        [DisplayName("LeaderShipRow")]
        public class LeaderShipRow
        {
            public const string Delete = "Evaluation:LeaderShipRow:Delete";
            public const string Modify = "Evaluation:LeaderShipRow:Modify";
            public const string View = "Evaluation:LeaderShipRow:View";
        }

        //[DisplayName("EvaluationFinalResult")]
        //public class EvaluationFinalResult
        //{
        //    public const string Delete = "Evaluation:EvaluationFinalResult:Delete";
        //    public const string Modify = "Evaluation:EvaluationFinalResult:Modify";
        //    public const string View = "Evaluation:EvaluationFinalResult:View";
        //}

        public const string General = "Evaluation:General";
    }
}