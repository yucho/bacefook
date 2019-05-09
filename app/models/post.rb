class Post < ApplicationRecord
  belongs_to :poster, polymorphic: true
  belongs_to :postable, polymorphic: true

  validates :body, presence: true, length: { maximum: 10000 }
  validates :poster, :postable, presence: true
end
