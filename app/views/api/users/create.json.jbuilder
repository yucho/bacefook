if @user.errors.empty?
  json.user do
    json.(@user, :email, :phone)
  end
else
  json.errors @user.errors.full_messages
end
