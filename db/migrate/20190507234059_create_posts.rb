class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.references :postable, polymorphic: true, index: true, null: false
      t.text :body, null: false
      t.datetime :published_at, default: -> { 'CURRENT_TIMESTAMP' }

      t.timestamps
    end

    add_max_length :posts, [:body, 10000]
  end
end
