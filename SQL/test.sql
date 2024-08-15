-- AI RESPONSE
SELECT
  COUNT(posts.id) AS total_posts,
  users.display_name
FROM
  `bigquery-public-data.stackoverflow.stackoverflow_posts` AS posts
JOIN
  `bigquery-public-data.stackoverflow.users` users
ON
  posts.owner_user_id=users.id
WHERE
  TIMESTAMP('2020-06-01') >= posts.creation_date AND 
  posts.score > 1000
GROUP BY
  users.display_name
ORDER BY
  total_posts DESC
LIMIT
  10

-- User response

SELECT
  COUNT(posts.id) AS total_posts,
  DISTINCT users.display_name
FROM
  `bigquery-public-data.stackoverflow.stackoverflow_posts` AS posts
JOIN
  `bigquery-public-data.stackoverflow.users` users
ON
  posts.owner_user_id=users.id
WHERE
  TIMESTAMP('2020-06-01') >= posts.creation_date AND 
  posts.score > 1000
ORDER BY
  total_posts DESC
LIMIT
  10