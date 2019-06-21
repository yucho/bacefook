class FriendRequest < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: :User

  validates :user, presence: true
  validates :friend, presence: true, uniqueness: { scope: :user }
  validate :not_self
  validate :not_friends
  validate :not_pending

  def accept
    user.friends << friend
    destroy
  end

  private

  def not_self
    errors.add(:friend, "can't be equal to user") if user == friend
  end

  def not_friends
    errors.add(:friend, "is already added") if user.friends.include?(friend)
  end
  
  def not_pending
    if friend.pending_friends.include?(user)
      errors.add(:friend, "already requested friendship")
    end
  end
end
