@post = post unless post.nil?


json.(@post, :id, :poster_id, :poster_type, :postable_id,
  :postable_type, :published_at, :body)
json.comments do
  json.array! @post.comments.map { |comment| comment.id }
end
