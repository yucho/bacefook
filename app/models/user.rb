require "bcrypt"

class User < ApplicationRecord
  include Authentication

  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, presence: true, allow_nil: true,
    length: { minimum: 6, maximum: 64, message: "must be between 6 and 64 characters" }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credential(email_or_phone, password)
    User.find_by(email: email_or_phone, password: password) ||
    User.find_by(phone: email_or_phone, password: password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end
end
