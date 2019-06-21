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

  json.users do
    json.array! users, :email, :phone, :posts
  end

  json.posts do
    json.array! posts
  end
end
