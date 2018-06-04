IF EXISTS (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_NAME = N'LeaderEvaluationResult')
DROP VIEW hr.LeaderEvaluationResult
GO
CREATE VIEW hr.LeaderEvaluationResult
AS
SELECT  
        UserId ,
		DepartmentId,
        ExamId ,
        Title,
        Username ,
		DepartmentName,
        TotalScore,
        Email
FROM    hr.EvaluationResultView
WHERE   ParentUserId = EvaluationUserId