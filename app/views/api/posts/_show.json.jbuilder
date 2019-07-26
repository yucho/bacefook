@post = post unless post.nil?

json.(@post, :id, :poster_id, :poster_type, :postable_id,
  :postable_type, :published_at, :body)
json.comments(@post.comments.map { |comment| comment.id })
json.likes(@post.likes.map { |like| like.id })
json.photos(@post.photos.map { |photo| photo.id })
json.describing(@post.describing ? @post.describing.id : nil)
