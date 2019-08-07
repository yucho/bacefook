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

  # For now, just send all data ever
  users = User.all 
  comments = Comment.all
  likes = Like.all 
  photos = Photo.all

  json.currentUser current_user.id
  json.users do
    json.array! users do |user|
      json.id user.id
      json.first_name user.first_name
      json.last_name user.last_name
      json.email user.email
      json.phone user.phone
      json.posts(user.posts.map { |post| post.id })
      json.photos(user.photos.map{ |photo| photo.id })
      json.profile_photo user.profile_photo.nil? ? nil : user.profile_photo.id
    end
  end

  json.partial! "api/posts/index", posts: posts
  json.partial! "api/comments/index", comments: comments
  json.partial! "api/photos/index", photos: photos
  json.partial! "api/likes/index", likes: likes
end
