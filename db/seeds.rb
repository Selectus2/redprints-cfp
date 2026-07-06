User.create!(
  name: "Martian Admin",
  email: "admin@redprints.test",
  admin: true
)

User.find_or_create_by!(email: "chaitali.khangar@gmail.com") do |user|
  user.name = "Chaitali Khangar"
  user.admin = true
end

User.find_or_create_by!(email: "vishwajeetsinghd@gmail.com") do |user|
  user.name = "Vishwajeetsingh Desurkar"
  user.admin = true
end
