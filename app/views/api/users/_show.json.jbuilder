json.id user.id
json.first_name user.first_name
json.last_name user.last_name
json.email user.email
json.phone user.phone
json.posts(user.posts.map { |post| post.id })
json.photos(user.photos.map{ |photo| photo.id })
json.profile_photo user.profile_photo.nil? ? nil : user.profile_photo.id
