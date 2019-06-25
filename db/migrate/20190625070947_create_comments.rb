class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :commenter_id
      t.string :commenter_type
      t.integer :commentable_id
      t.string :commentable_type
      t.string :body

      t.timestamps
    end
    add_index :comments, :commenter_id
    add_index :comments, :commenter_type
    add_index :comments, :commentable_id
    add_index :comments, :commentable_type
  end
end
