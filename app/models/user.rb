class User < ApplicationRecord
  include CpfValidates
  include Blockable
  extend FriendlyId
  friendly_id :token, use: :slugged
  devise :database_authenticatable, :registerable, :confirmable, :timeoutable,
         :recoverable, :rememberable, :validatable, :trackable, :lockable, authentication_keys: [ :cpf ]

  # Storage
  # has_one_attached :avatar

  # Validations
  validate :blocked_user, on: [:login]
  validate :cpf_validate, on: [:login, :create, :update]
  validates :token, presence: {message: "Token não pode ficar em branco. "}, uniqueness: { case_sensitive: false, message: "Token já existe na base. "  }, on: [:update]
  validates :cpf, presence: {message: "CPF não pode ficar em branco. "}, uniqueness: { case_sensitive: false, message: "CPF já existe na base. "  }, on: [:create, :update]
  validates :email, presence: {message: "E-mail não pode ficar em branco. "}, uniqueness: { case_sensitive: false, message: "E-mail já existe na base. "  }, on: [:create, :update]

  # Relations
  has_one :account, class_name: "Account::Entity", foreign_key: "user_id"
  
  #Enums
  enum account_kind: { admin: 0,
                       team: 1,
                       doctor: 2,
                       helper: 3,
                       patient: 4 }, _prefix: :_

  enum sex: { male: 0,
              female: 1}, _prefix: :_

  #Callbacks
        
  def should_generate_new_friendly_id?
    self.token_changed?
  end

  def normalize_friendly_id(value)
    value.to_s.parameterize(preserve_case: true)
  end

  def create_basic_permissions
    ::Users::Permissions::CreateBasicPermissionsService.basic_permissions(self)
  end
  

end


# User
# string "name"
# string "cpf"
# boolean "active"
# string "email"
# string "encrypted_password"
# integer "account_kind"
# string "reset_password_token"
# datetime "reset_password_sent_at"
# datetime "remember_created_at"
# integer "sign_in_count"
# datetime "current_sign_in_at"
# datetime "last_sign_in_at"
# inet "current_sign_in_ip"
# inet "last_sign_in_ip"
# string "confirmation_token"
# datetime "confirmed_at"
# datetime "confirmation_sent_at"
# string "unconfirmed_email"
# datetime "last_sign_out_at"
# datetime "current_request_at"
# datetime "previous_request_at"
# integer "failed_attempts"
# string "unlock_token"
# datetime "locked_at"
# string "slug"
# datetime "created_at"
# datetime "updated_at"
# boolean "super_admin"
# boolean "blocked"
# datetime "blocked_at"
# integer "sex"
# string "token"