# Tables
- Users
  - id (PRIMARY KEY number)
  - email (string)
  - password (string)
  - first_name (string)
  - last_name (string)
  - dob (date)
  - bio (string)

- Friendships
  - id (PRIMARY KEY number)
  - requester_id (FOREIGN KEY number)
  - requestee_id (FOREIGN KEY number)
  - status (enum: pending, accepted, declined)
  - date_requested (date)

- Posts
  - id (PRIMARY KEY number)
  - user_id (FOREIGN KEY number)
  - text (string)
  - likes (number)
  - date_posted (date)

- Likes
  - id (PRIMARY KEY number)
  - post_id (FOREIGN KEY number)
  - user_id (FOREIGN KEY number)
  - date_liked (date)


# Relations
All tables connected via user ids.

# Queries
- Get all of one user's friends
```
SELECT first_name, last_name FROM
  friendships JOIN users
  ON users.id = friendships.requester_id
  WHERE requestee_id='[friend_id]' 
UNION
SELECT first_name, last_name FROM
  friendships JOIN users
  ON users.id = friendships.requestee_id
  WHERE requester_id='[friend_id]'
```
- Get all of one user's posts
```
SELECT text FROM posts
WHERE user_id='[user_id]'
```
- Get all likers of one post
```
SELECT first_name, last_name FROM
  likes JOIN users
  ON users.id = likes.user_id
  WHERE post_id='[post_id]'
```
- Get all posts liked by one user
```
SELECT first_name, last_name, posts.id, text FROM
  posts JOIN likes
  ON posts.id = likes.post_id
  JOIN users
  ON users.id = likes.user_id
  WHERE likes.user_id = '[user_id]';
```
- Get status of one friend request
```
SELECT status FROM friendships
  WHERE friendships.id = ['user_id']
```
