# me = current_user
me = User.first
friends = me.friends
users = friends << me
# Post.where(poster: users)

json.users users
