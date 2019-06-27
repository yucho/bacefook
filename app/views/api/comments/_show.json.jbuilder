@comment = comment unless comment.nil?

json.id @comment.id
json.commenter_id = @comment.commenter_id
json.commenter_type = @comment.commenter_type
json.commentable_id = @comment.commentable_id
json.commentable_type = @comment.commentable_type
json.body @comment.body
json.comments do
  json.array! @comment.comments.map { |comment| comment.id }
end
