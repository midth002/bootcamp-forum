DROP DATABASE IF EXISTS bootcamp_forum_db;
CREATE DATABASE bootcamp_forum_db;

INSERT INTO post (title, contents, topic, user_id, created_at, updated_at)
VALUES ("title", "contents", "topic", 1, now(), now());
VALUES ("title 2", "contents", "topic", 2, now(), now())
VALUES ("title 4", "contents", "topic", 2, now(), now())
VALUES ("title 5", "contents", "topic", 1, now(), now())
VALUES ("title 6", "contents", "topic", 3, now(), now())
VALUES ("title 7", "contents", "topic", 3, now(), now());
