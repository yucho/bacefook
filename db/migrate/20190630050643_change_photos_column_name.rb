class ChangePhotosColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :photos, :user_id, :account_id
    rename_column :photos, :user_type, :account_type
  end
end
