IF EXISTS(SELECT TABLE_NAME
          FROM INFORMATION_SCHEMA.VIEWS
          WHERE TABLE_NAME = N'SelfEvaluationResult')
  DROP VIEW hr.SelfEvaluationResult
GO
CREATE VIEW hr.SelfEvaluationResult
  AS
    select
      ROW_NUMBER()
      OVER (
        ORDER BY t.Username ) AS Id,
      *
    from
      (select distinct
         ex.Title,
         i.Content,
         InputContent,
         Username,
         d.Name as DepartmentName
       from [hr].[EvaluationResultDetail] e
         left join dbo.Users u
           on e.UserId = u.UserId
         left join hr.EvaluationItem i
           on i.Id = e.EvaluationItemId
         left join hr.Department d
           on d.Id = u.DepartmentId
         left join hr.Exam ex
           on ex.Id = e.ExamId
       where inputcontent is not null and i.IsSelfEvaluation = 1) as t
