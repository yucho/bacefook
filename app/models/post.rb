class Post < ApplicationRecord
  belongs_to :poster, polymorphic: true
  belongs_to :postable, polymorphic: true
  has_many :comments, as: :commentable
  has_many :post_fields
  has_many :photos, through: :post_fields, source: :field, source_type: "Photo"

  validates :body, length: { maximum: 10000 }
  validates :poster, :postable, presence: true

  attr_accessor :files
end
