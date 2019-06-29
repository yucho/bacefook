class CreatePostFields < ActiveRecord::Migration[5.2]
  def change
    create_table :post_fields do |t|
      t.references :post, foreign_key: true
      t.integer :field_id
      t.string :field_type

      t.timestamps
    end
    add_index :post_fields, :field_id
    add_index :post_fields, :field_type
  end
end
