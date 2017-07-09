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
        [DisplayName("Department")]
        public class Department
        {
            public const string Delete = "Evaluation:Department:Delete";
            public const string Modify = "Evaluation:Department:Modify";
            public const string View = "Evaluation:Department:View";
        }
        [DisplayName("Employee")]
        public class Employee
        {
            public const string Delete = "Evaluation:Employee:Delete";
            public const string Modify = "Evaluation:Employee:Modify";
            public const string View = "Evaluation:Employee:View";
        }
        [DisplayName("EvaluationItem")]
        public class EvaluationItem
        {
            public const string Delete = "Evaluation:EvaluationItem:Delete";
            public const string Modify = "Evaluation:EvaluationItem:Modify";
            public const string View = "Evaluation:EvaluationItem:View";
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
        [DisplayName("ToDoList")]
        public class ToDoList
        {
            public const string Delete = "Evaluation:ToDoList:Delete";
            public const string Modify = "Evaluation:ToDoList:Modify";
            public const string View = "Evaluation:ToDoList:View";
        }
        [DisplayName("UserEvaluationRelation")]
        public class UserEvaluationRelation
        {
            public const string Delete = "Evaluation:UserEvaluationRelation:Delete";
            public const string Modify = "Evaluation:UserEvaluationRelation:Modify";
            public const string View = "Evaluation:UserEvaluationRelation:View";
        }

        [DisplayName("UserEvaluationRelation")]
        public class EvaluationResult
        {
            public const string Delete = "Evaluation:EvaluationResult:Delete";
            public const string Modify = "Evaluation:EvaluationResult:Modify";
            public const string View = "Evaluation:EvaluationResult:View";
        }

        public const string General = "Evaluation:General";
    }
}