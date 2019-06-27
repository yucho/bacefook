@posts = posts unless posts.nil?

json.posts do
  json.array! @posts do |post|
    json.partial! "api/posts/show", post: post
  end
end
