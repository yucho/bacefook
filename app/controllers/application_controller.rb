class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  rescue_from StandardError, with: :error_handler

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !! current_user
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token! if current_user
    session[:session_token] = nil
  end

  private

    def error_handler(e)
      render json: { errors: e.to_s }, status: :bad_request
    end
end
