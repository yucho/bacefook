class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :likeable_id
      t.string :likeable_type
      t.string :reaction

      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :likeable_id
    add_index :likes, :likeable_type
    add_index :likes, :reaction
  end
end
