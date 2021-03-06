# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Quick and dirty methods, refactor it later
def UserFactory(attrs)
  attr_names = [:first_name, :last_name, :email, :password, :birthday, :gender]
  User.create(attr_names.each.with_index.with_object({}) { |(name, i), memo| memo[name] = attrs[i] })
end

def UsersFactory(users_attrs)
  users_attrs.each { |user_attrs| UserFactory(user_attrs) }
end

def PostFactory(attrs)
  attr_names = [:poster, :postable, :body, :published_at]
  Post.create(attr_names.each.with_index.with_object({}) { |(name, i), memo| memo[name] = attrs[i] })
end

def PostsFactory(posts_attrs)
  posts_attrs.each { |post_attrs| PostFactory(post_attrs) }
end

def DecimateAllExistence!
  [User, Post].each &:delete_all
end


DecimateAllExistence!

UsersFactory([
  ["Parry", "Hotter", "photter@hogwarts.com", "hotterhotter", "1980/7/31", "male"],
  ["BpongeSob", "PquareSants", "spongey@krustykrabs.com", "jellyfish4ever", "1986/7/14", "male"],
  ["Hucho", "Yo", "yucho.ho@gmail.com", "hunter12", "1989/2/12", "male"],
  ["Lonely", "Boy", "no_friends@sadboy.me", "hunter12", "1999/9/9", "male"]
])

parry = User.find_by(first_name: "Parry")
bpongesob = User.find_by(first_name: "BpongeSob")
hucho = User.find_by(first_name: "Hucho")
loner = User.find_by(first_name: "Lonely")

PostsFactory([
  [parry, parry, "Until the very end.", nil],
  [bpongesob, bpongesob, "Imagination.", nil],
  [parry, bpongesob, "Hello, Spon... BpongeSob!", nil],
  [hucho, bpongesob, "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.", nil],
  [parry, parry, "If I were a tree, I would have no reason to love a human.", nil],
  [parry, bpongesob, "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", nil],
  [loner, loner, "My post cannot be seen by others", nil]
])

parry.friendships.create(friend: bpongesob)
hucho.friendships.create(friend: bpongesob)
