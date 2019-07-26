@likes = likes unless likes.nil?

json.likes do
  json.array! @likes do |like|
    json.partial! "api/likes/show", like: like
  end
end
