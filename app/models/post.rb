class Post < ApplicationRecord
  belongs_to :poster, polymorphic: true
  belongs_to :postable, polymorphic: true
  has_many :comments, as: :commentable
  has_many :post_fields

  validates :body, presence: true, length: { maximum: 10000 }
  validates :poster, :postable, presence: true
end
