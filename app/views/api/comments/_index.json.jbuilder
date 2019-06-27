@comments = comments unless comments.nil?

json.comments do
  json.array! @comments do |comment|
    json.partial! "api/comments/show", comment: comment
  end
end
