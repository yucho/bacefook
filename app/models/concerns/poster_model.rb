module PosterModel
  extend ActiveSupport::Concern

  included do
    has_many :given_posts, as: :poster
  end
end
