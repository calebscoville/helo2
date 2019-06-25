insert into users(username, password, url)
values (${username}, ${password}, ${url})
returning *
;