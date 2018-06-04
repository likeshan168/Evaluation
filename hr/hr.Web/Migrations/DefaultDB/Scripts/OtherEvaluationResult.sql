IF EXISTS (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_NAME = N'OtherEvaluationResult')
DROP VIEW hr.OtherEvaluationResult
GO
Create View hr.OtherEvaluationResult
AS
SELECT 
        UserId ,
		DepartmentId,
        ExamId ,
        Title,
        Username ,
		DepartmentName,
        AVG( TotalScore) TotalScore,
        Email
FROM    hr.EvaluationResultView
WHERE   ParentUserId != EvaluationUserId
GROUP BY UserId,ExamId,Title,Username,Email,DepartmentId, DepartmentName