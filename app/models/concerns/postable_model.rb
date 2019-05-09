module PostableModel
  extend ActiveSupport::Concern

  included do
    has_many :received_posts, as: :postable
  end
end
