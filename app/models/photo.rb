class Photo < ApplicationRecord
  belongs_to :account, polymorphic: true, depentend: :destroy
  has_many :post_fields, as: :field
  has_one :description, foreign_key: :post_id, source: 'Post'

  has_one_attached :file

  validates :post, presence: true
end
