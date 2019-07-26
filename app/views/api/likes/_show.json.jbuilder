@like = like unless like.nil?

json.(@like, :id, :user_id, :likeable_id, :likeable_type, :reaction)
