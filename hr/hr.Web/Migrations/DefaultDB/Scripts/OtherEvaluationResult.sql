Create View hr.OtherEvaluationResult
AS
SELECT 
        UserId ,
        ExamId ,
        Title,
        Username ,
        AVG( TotalScore) TotalScore,
        Email
FROM    hr.EvaluationResultView
WHERE   ParentUserId != EvaluationUserId
GROUP BY UserId,ExamId,Title,Username,Email