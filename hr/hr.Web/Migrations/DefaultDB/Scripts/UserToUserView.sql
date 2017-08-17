Create View hr.UserToUserView
As
SELECT
	u.Id,
	r.UserId,
	us2.Username,
	us2.Email,
	r.ExamId,
	e.Title,
	u.UserId AS EvaluationUserId,
	us.Email AS EvaluationEmail,
	us.Username AS EvaluationName,
	u.HasEvaluated
FROM
	hr.UserEvaluationRelation r
LEFT JOIN hr.UserEvaluationToUser u ON r.Id = u.UserEvaluationRelationId
LEFT JOIN dbo.Users AS us ON us.UserId = u.UserId
LEFT JOIN dbo.Users AS us2 ON us2.UserId = r.UserId
LEFT JOIN hr.Exam AS e ON e.Id = r.ExamId