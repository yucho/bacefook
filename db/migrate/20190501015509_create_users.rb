class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      # In Postgresql, char, varchar, and text are all varlena, so always use text
      t.text :password_digest, null: false
      t.text :session_token, null: false
      t.text :email
      t.text :phone
      
      t.index :session_token, unique: true
      t.index :email, unique: true
      t.index :phone, unique: true

      t.timestamps
    end

    # Postgresql doesn't support limit option for text, so add custom constraints
    add_max_length(:users, [:password_digest, 64])
    add_max_length(:users, [:session_token, 32])
    add_max_length(:users, [:email, 80])
    add_max_length(:users, [:phone, 30])
  end
end
