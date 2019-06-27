class Comment < ApplicationRecord
  belongs_to :commenter, polymorphic: true
  belongs_to :commentable, polymorphic: true
  has_many :comments, as: :commentable
  alias_attribute :author, :commenter
  alias_attribute :target, :commentable
  alias_attribute :replies, :comments
  
  ALLOWED_COMMENTER_TYPES = %w(User)
  ALLOWED_COMMENTABLE_TYPES = %w(Post Comment)
  validates :commenter_id, :commentable_id, :body, presence: true
  validates :commenter_type, presence: true, inclusion: { in: ALLOWED_COMMENTER_TYPES }
  validates :commentable_type, presence: true, inclusion: { in: ALLOWED_COMMENTABLE_TYPES }
  validate :valid_commenter
  validate :valid_commentable

  private

  def valid_commenter
    errors.add_to_base("Invalid author") unless !!commenter
  end

  def valid_commentable
    errors.add_to_base("Invalid target") unless !!commentable
  end
end
