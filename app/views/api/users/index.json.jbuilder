if logged_in?
  json.message "You are logged in!"
  json.users do
    json.array! [current_user], :email, :phone
  end
else
  json.errors current_user.errors.full_messages
end
