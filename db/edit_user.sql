update users set
(image,
username,
password)
= ($2, $3) where user_id = $1
returning * ;