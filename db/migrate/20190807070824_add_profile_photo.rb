class AddProfilePhoto < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.integer :profile_photo_id
    end
  end
end
