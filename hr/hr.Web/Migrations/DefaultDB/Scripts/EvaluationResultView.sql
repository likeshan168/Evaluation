IF EXISTS (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_NAME = N'EvaluationResultView')
DROP VIEW hr.EvaluationResultView
GO
CREATE VIEW hr.EvaluationResultView
AS

SELECT
	ROW_NUMBER () OVER (ORDER BY u1.Username) AS Id,
	r.UserId,
	u1.Username,
	l.ParentUserId,
	ExamId,
	e.Title,
	u1.Email,
	u2.Email AS EvaluationEmail,
	CASE
WHEN l.ParentUserId = EvaluationUserId THEN
	ISNULL(SUM(Score) * 0.6, 0)
ELSE
	ISNULL(SUM(Score) / 0.9 * 0.4, 0)
END AS TotalScore,
 EvaluationUserId,
 u2.Username AS EvaluationUser
FROM
	hr.EvaluationResultDetail AS r
LEFT JOIN dbo.Users AS u1 ON u1.UserId = r.UserId
LEFT JOIN dbo.Users AS u2 ON u2.UserId = r.EvaluationUserId
LEFT JOIN hr.LeaderShip l ON l.UserId = r.UserId
LEFT JOIN hr.Exam e ON e.Id = r.ExamId
GROUP BY
	r.UserId,
	l.ParentUserId,
	EvaluationUserId,
	ExamId,
	e.Title,
	u1.Username,
	u2.Username,
	u1.Email,
	u2.Email