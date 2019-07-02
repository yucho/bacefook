class Post < ApplicationRecord
  belongs_to :poster, polymorphic: true
  belongs_to :postable, polymorphic: true, optional: true
  has_many :comments, as: :commentable
  has_many :post_fields
  has_many :photos, through: :post_fields, source: :field, source_type: "Photo"
  has_one :describing, foreign_key: :post_id, class_name: "Photo"

  validates :body, length: { maximum: 10000 }
  validates :poster, presence: true

  attr_accessor :files
end
