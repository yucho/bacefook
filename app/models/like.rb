class Like < ApplicationRecord
  belongs_to :user
  belongs_to :likeable, polymorphic: true

  validates :user, presence: true
  validates :likeable, :reaction, presence: true

  before_validation :default_reaction

  def default_reaction
    self.reaction ||= "like"
  end
end
