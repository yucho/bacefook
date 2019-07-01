class PostField < ApplicationRecord
  belongs_to :post, dependent: :destroy
  belongs_to :field, polymorphic: true, dependent: :destroy
end
