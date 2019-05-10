class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.references :user, polymorphic: true, index: true

      t.timestamps
    end
  end
end
