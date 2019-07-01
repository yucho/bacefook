class RemovePostsBodyValidation < ActiveRecord::Migration[5.2]
  def change
    reversible do |dir|
      dir.up do
        change_column :posts, :body, :text, null: true
        change_column :posts, :postable_id, :integer, null: true
        change_column :posts, :postable_type, :string, null: true
      end
      dir.down do
        change_column :posts, :body, :text, null: false
        change_column :posts, :postable_id, :integer, null: false
        change_column :posts, :postable_type, :string, null: false
      end
    end
  end
end
