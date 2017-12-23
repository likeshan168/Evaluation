CREATE VIEW hr.EvaluationFinalResult1
AS
SELECT  f.UserId ,
        f.ExamId ,
        f.Title ,
        f.Username AS UserName,
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
        f.Username;