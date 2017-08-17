CREATE VIEW hr.LeaderEvaluationResult
AS
SELECT  
        UserId ,
        ExamId ,
        Title,
        Username ,
        TotalScore,
        Email
FROM    hr.EvaluationResultView
WHERE   ParentUserId = EvaluationUserId