class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def current_user
    @current_user ||= User.findUserByCredential(session[session_token])
  end
end
