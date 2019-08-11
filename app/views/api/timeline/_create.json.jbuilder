timestamp ||= Time.new

posts = Post.where("published_at < ?", timestamp).where(poster: user)
  .or(Post.where("published_at < ?", timestamp).where(postable: user))
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
json.users do
  json.array! users do |user|
    json.partial! "api/users/show", user: user
  end
end
json.partial! "api/posts/index", posts: posts
json.partial! "api/comments/index", comments: comments
json.partial! "api/photos/index", photos: photos
json.partial! "api/likes/index", likes: likes
