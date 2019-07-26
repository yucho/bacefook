@comment = comment unless comment.nil?

json.(@comment, :id, :commenter_id, :commenter_type, :commentable_id, :commentable_type, :body)
json.comments do
  json.array! @comment.comments.map { |comment| comment.id }
end
json.likes(@comment.likes.map { |like| like.id })
