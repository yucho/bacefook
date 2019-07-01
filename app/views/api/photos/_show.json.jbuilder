@photo = photo unless photo.nil?

json.(@photo, :id, :account_id, :account_type)
json.url @photo.file.service_url
json.description @photo.post_id
