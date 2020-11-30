class User::Permission < ApplicationRecord

  self.table_name = "user_permissions"
  default_scope -> {order(id: :asc)}

  
  # Relations
  belongs_to :user, class_name: "User", foreign_key: "user_id"
  belongs_to :feature, class_name: "User::Permission::Feature", foreign_key: "feature_id"

  # Validations
  validates :token, uniqueness: { case_sensitive: false, message: "A Permissão para o usuário já existe. " }

  # Enums

  # Callbacks
  before_validation :set_token


  def set_token
    self.token = ::Users::PermissionRepository.set_token(self)
  end
                  
  def self.save_feature_id
    User::Permission.all.each do |permission|
      if permission.feature.nil?
        feature_name = permission.feature_name
        feature = User::Permission::Feature.where(name: feature_name).first
        if feature
          permission.feature_id = feature.id
        end
        permission.save
      end
    end
  end
  
end

# create_table "user_permissions", force: :cascade do |t|
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.boolean "active", default: true, null: false
# t.bigint "user_id"
# t.bigint "feature_id"
# t.string "feature_name"
# t.boolean "can_create", default: false
# t.boolean "can_update", default: false
# t.boolean "can_delete", default: false
# t.boolean "can_read", default: false
# t.boolean "can_list", default: false
# t.boolean "can_show", default: false
# t.boolean "can_index", default: false
# t.boolean "can_report", default: false
# t.boolean "can_select", default: false
# t.boolean "can_assign", default: false
# t.boolean "can_copy", default: false
# t.boolean "can_copy_text", default: false
# t.boolean "can_download", default: false
# t.boolean "can_upload", default: false
# t.boolean "can_manage", default: false
# t.boolean "can_email", default: false
# t.boolean "can_notification", default: false
# t.string "token"