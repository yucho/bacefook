class Photo < ApplicationRecord
  belongs_to :account, polymorphic: true, dependent: :destroy
  belongs_to :description, foreign_key: :post_id, class_name: "Post"
  has_many :post_fields, as: :field

  has_one_attached :file

  validates :post_id, presence: true

  before_validation :ensure_description

  private

  def ensure_description
    unless self.description
      post = account.posts.create
      self.post_id = post.id
    end
  end
end
