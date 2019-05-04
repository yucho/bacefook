# This will serve news feed eventually
if logged_in?
  json.message "You are logged in!"
  json.user do
    json.(@user, :email, :phone)
  end
else
  json.errors @user.errors.full_messages
end
