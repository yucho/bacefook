class AddPhotosColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :post_id, :integer
    add_index :photos, :post_id
  end
end
