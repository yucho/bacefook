@photo = photo unless photo.nil?

json.(@photo, :id, :account_id, :account_type)
json.url url_for(@photo.file)
