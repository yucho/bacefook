class Photo < ApplicationRecord
  belongs_to :user, polymorphic: true

  has_one_attached :media
end
