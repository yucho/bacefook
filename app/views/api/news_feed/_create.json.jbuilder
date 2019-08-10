users = [current_user] +current_user.friends
timestamp ||= Time.new

posts = Post.where("published_at < ?", timestamp).where(poster: users)
  .or(Post.where("published_at < ?", timestamp).where(postable: users))
  .order(published_at: :desc)
  .limit(10)

# comments = Comment.where(commentable: posts)
# comments += Comment.where(commentable: comments)

# Cheat for now
comments = Comment.all
likes = Like.all 
photos = Photo.all
users = User.all

json.currentUser current_user.id
json.users users
json.partial! "api/posts/index", posts: posts
json.partial! "api/comments/index", comments: comments
json.partial! "api/photos/index", photos: photos
json.partial! "api/likes/index", likes: likes
