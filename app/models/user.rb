require "date"

class User < ApplicationRecord
  include Utility::SanityChecker

  validates :first_name, :last_name, presence: true, length: { minimum: 1, maximum: 50 }
  validate  :valid_email_or_phone, :valid_or_nil_email, :valid_or_nil_phone
  validates :email, allow_nil: true, uniqueness: true, length: { minimum: 6, maximum: 254 }
  validates :phone, allow_nil: true, uniqueness: true, length: { minimum: 5, maximum: 50 }
  validates :password_digest, presence: true
  validates :session_token,   presence: true, uniqueness: true
  validates :password,        presence: true, allow_nil: true, length: { minimum: 6, maximum: 64 }
  validates :gender,          presence: true, inclusion: { in: %w(male female other) }
  validate  :valid_birthday

  has_many :posts, as: :poster
  has_many :timeline_posts, as: :postable, class_name: :Post
  has_many :comments, as: :commenter
  has_many :friend_requests, dependent: :destroy
  has_many :pending_friends, through: :friend_requests, source: :friend
  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships
  has_many :photos, as: :account

  after_initialize :ensure_session_token
  
  attr_reader :password, :email_or_phone

  def self.find_by_credential(email_or_phone, password)
    user = User.find_by(email: email_or_phone) || User.find_by(phone: email_or_phone)
    if user
      return user if user.is_password?(password)
      raise "Password is wrong"
    end

    raise ActiveRecord::RecordNotFound.new('Email or phone does not match any record', User)
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
      email = self.email.nil? ? '' : self.email
      phone = self.phone.nil? ? '' : self.phone
      unless valid_email?(email) || valid_phone?(phone)
          errors.add(:email_or_phone, "must be valid")
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

    def valid_birthday
      if !self.birthday.instance_of? Date
        errors.add(:birthday, "must be valid")
      elsif self.birthday.year < 1905
        errors.add(:birthday, "is too old")
      elsif self.birthday > Time.now
        errors.add(:birthday, "must be in the past")
      end
    end
end
