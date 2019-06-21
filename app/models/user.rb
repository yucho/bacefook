class User < ApplicationRecord
  include Utility::SanityChecker

  validates :password_digest, presence: true
  validates :session_token,   presence: true, uniqueness: true
  validates :password,        presence: true, allow_nil: true, length: { minimum: 6, maximum: 64 }
  validate  :valid_email_or_phone
  with_options if: ->{ email_or_phone.nil? } do validate :valid_or_nil_email, :valid_or_nil_phone end
  validates :email, :phone, allow_nil: true, uniqueness: true

  has_many :friend_requests, dependent: :destroy
  has_many :pending_friends, through: :friend_requests, source: :friend
  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships

  attr_reader :password, :email_or_phone

  after_initialize :ensure_session_token

  def self.find_by_credential(email_or_phone, password)
    user = User.find_by(email: email_or_phone) || User.find_by(phone: email_or_phone)
    return user if user && user.is_password?(password)

    nil # throw UserNotFound error?
  end

  def password=(password)
    @password = password
    self.password_digest = generate_password_digest(password)
  end

  def email_or_phone=(email_or_phone)
    if(valid_email?(email_or_phone))
      self.email = sanitize_email(email_or_phone)
    elsif(valid_phone?(email_or_phone))
      self.phone = numericalize_phone(email_or_phone)
    end
  end

  def remove_friend(friend)
    friends.destroy(friend)
  end

  private

    def generate_password_digest(password)
      BCrypt::Password.create(password)
    end

    def valid_email_or_phone
      return if email_or_phone.nil?

      unless(valid_email?(email_or_phone) || valid_email?(email_or_phone))
        errors.add(:base, :invalid_email_or_phone, message: "must provide valid email or phone")
      end
    end

    def valid_or_nil_email
      unless email.nil? || valid_email?(email)
        errors.add(:email, "must be valid")
      end
    end

    def valid_or_nil_phone
      unless phone.nil? || valid_phone?(phone)
        errors.add(:phone, "must be valid")
      end
    end
end
