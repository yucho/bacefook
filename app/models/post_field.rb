class PostField < ApplicationRecord
  belongs_to :post
  belongs_to :field, polymorphic: true
end
