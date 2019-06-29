class PostField < ApplicationRecord
  belongs_to :post
  belongs_to :field_of, polymorphic: true
end
