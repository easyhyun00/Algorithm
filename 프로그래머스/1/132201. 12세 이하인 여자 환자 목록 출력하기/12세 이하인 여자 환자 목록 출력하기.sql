-- 코드를 입력하세요
SELECT 
  PT_NAME, PT_NO,
  GEND_CD,
  AGE,
  coalesce(TLNO, 'NONE') AS TLNO
From PATIENT
Where AGE <= 12 && GEND_CD = "W" order by AGE desc, PT_NAME asc