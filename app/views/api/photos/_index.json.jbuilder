@photos = photos unless photos.nil?

json.photos do
  json.array! @photos do |photo|
    json.partial! "api/photos/show", photo: photo
  end
end
