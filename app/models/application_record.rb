class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def uuid
    self.id # Eventually use UUID
  end
end
