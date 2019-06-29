class Photo < ApplicationRecord
  belongs_to :account, polymorphic: true
  has_many :post_fields, as: :field_of

  has_one_attached :media
end
