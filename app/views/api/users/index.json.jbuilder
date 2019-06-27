unless logged_in?
  json.error "You must log in"
else
  json.message "You are logged in!"

  users = current_user.friends << current_user
  ids = users.pluck(:id)
  posts = Post.where(<<-SQL, ids, ids)
    poster_type = 'User' AND (
      poster_id IN (?) OR postable_id IN (?)
    )
  SQL
  .uniq

  users = User.all # For now, just send all users

  comments = Comment.all # For now, just send all comments

  json.users do
    json.array! users do |user|
      json.id user.id
      json.first_name user.first_name
      json.last_name user.last_name
      json.email user.email
      json.phone user.phone
      json.posts { json.array! user.posts, :id }
    end
  end

  json.partial! "api/posts/index", posts: posts

  json.partial! "api/comments/index", comments: comments
end
