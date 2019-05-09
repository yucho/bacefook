class AddPosterToPosts < ActiveRecord::Migration[5.2]
  def change
    change_table :posts do |t|
      t.references :poster, polymorphic: true, index: true, null: false
    end
  end
end
