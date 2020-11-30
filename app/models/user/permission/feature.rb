class User::Permission::Feature < ApplicationRecord
  include Csv
  self.table_name = "feature_permissions"
  default_scope -> {order(humanize: :asc)}

  
  # Relations
  has_many :permissions, class_name: "User::Permission", foreign_key: "feature_id"

  # Validations
  validates :group, presence: { message: "Por favor, insira o Grupo da Funcionalidade. " }
  validates :name, presence: { message: "Por favor, insira o Enum da Funcionalidade. " }
  validates :humanize, presence: { message: "Por favor, insira o nome Funcionalidade. " }

  #Callbacks
  before_save :permission_dependent_destroy

  #Enums


  def permission_dependent_destroy
    self.permissions.destroy_all unless self.active
  end
  
  
end

# create_table "feature_permissions", force: :cascade do |t|
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.boolean "active", default: true, null: false
# t.string "group"
# t.string "name"
# t.string "humanize"
# t.text "notes"