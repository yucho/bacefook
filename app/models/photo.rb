class Photo < ApplicationRecord
  belongs_to :account, polymorphic: true
  has_many :post_fields, as: :field

  has_one_attached :file
end
