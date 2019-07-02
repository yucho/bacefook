class UpdateForeignKeys < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :friend_requests, :users
    remove_foreign_key :friendships, :users

    # add_foreign_key :friend_requests, :users, on_delete: :cascade
    # add_foreign_key :friendships, :users, on_delete: :cascade
  end
end
