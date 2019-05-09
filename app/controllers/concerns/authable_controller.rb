module AuthableController
  extend ActiveSupport::Concern

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token! if current_user
    session[:session_token] = nil
  end
end
