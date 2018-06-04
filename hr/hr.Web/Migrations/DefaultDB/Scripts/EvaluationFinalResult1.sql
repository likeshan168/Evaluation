IF EXISTS (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_NAME = N'EvaluationFinalResult1')
DROP VIEW hr.EvaluationFinalResult1
GO
CREATE VIEW hr.EvaluationFinalResult1
AS
SELECT  f.UserId ,
		f.DepartmentId,
        f.ExamId ,
        f.Title ,
        f.Username AS UserName,
		f.DepartmentName,
        f.Email,
        SUM(f.TotalScore) TotalScore
FROM    ( SELECT    *
          FROM      hr.LeaderEvaluationResult
          UNION
          SELECT    *
          FROM      hr.OtherEvaluationResult
        ) f
GROUP BY f.UserId ,
        f.ExamId ,
        f.Title ,
        f.Email,
        f.Username,
		f.DepartmentId,
		f.DepartmentName