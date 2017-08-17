CREATE VIEW hr.EvaluationFinalResult
AS
SELECT
	ROW_NUMBER () OVER (ORDER BY TotalScore) AS Id,
	*,
	CASE
WHEN TotalScore >= 98 THEN
	'杰出'
WHEN TotalScore >= 90 THEN
	'优秀'
WHEN TotalScore >= 75 THEN
	'优良'
WHEN TotalScore >= 60 THEN
	'一般'
ELSE
	'差'
END AS Grade
FROM
	hr.EvaluationFinalResult1