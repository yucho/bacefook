class AddBasicAttrsToUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.text :first_name, null: false
      t.text :last_name, null: false
      t.text :username, unique: true
      t.date :birthday, null: false
      t.text :gender, null: false
      t.text :about_me
    end

    add_max_length :users, [
      [:first_name, 64],
      [:last_name, 64],
      [:username, 64],
      [:about_me, 2000]
    ]

    # Add these constraints later:
    # * birthday should not be in the future
    # * gender should be one of [male, female, other]
  end
end
