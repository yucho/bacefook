@post = post unless post.nil?

json.id @post.id
json.poster_id = @post.poster_id
json.poster_type = @post.poster_type
json.postable_id = @post.postable_id
json.postable_type = @post.postable_type
json.body @post.body
json.comments do
  json.array! @post.comments.map { |comment| comment.id }
end
