# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_22_193636) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "account_entities", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.bigint "user_id"
    t.string "name"
    t.string "cpf"
    t.string "kind", array: true
    t.string "slug"
    t.date "birthdate"
    t.text "notes"
    t.integer "sex"
    t.string "token"
    t.index ["birthdate"], name: "index_account_entities_on_birthdate"
    t.index ["cpf"], name: "index_account_entities_on_cpf"
    t.index ["kind"], name: "index_account_entities_on_kind"
    t.index ["name"], name: "index_account_entities_on_name"
    t.index ["sex"], name: "index_account_entities_on_sex"
    t.index ["slug"], name: "index_account_entities_on_slug", unique: true
    t.index ["token"], name: "index_account_entities_on_token"
    t.index ["user_id"], name: "index_account_entities_on_user_id"
  end

  create_table "company_entities", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.string "name"
    t.string "trade_name"
    t.string "cnpj"
    t.string "kind", array: true
    t.string "subkind", array: true
    t.string "slug"
    t.date "opened_at"
    t.text "notes"
    t.index ["active"], name: "index_company_entities_on_active"
    t.index ["cnpj"], name: "index_company_entities_on_cnpj", unique: true
    t.index ["kind"], name: "index_company_entities_on_kind"
    t.index ["name"], name: "index_company_entities_on_name"
    t.index ["slug"], name: "index_company_entities_on_slug", unique: true
    t.index ["subkind"], name: "index_company_entities_on_subkind"
    t.index ["trade_name"], name: "index_company_entities_on_trade_name"
  end

  create_table "feature_permissions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.string "group"
    t.string "name"
    t.string "humanize"
    t.text "notes"
    t.index ["active"], name: "index_feature_permissions_on_active"
    t.index ["group"], name: "index_feature_permissions_on_group"
    t.index ["name"], name: "index_feature_permissions_on_name"
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "operation_account_products", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.bigint "account_id"
    t.bigint "tax_return_id"
    t.bigint "booking_id"
    t.string "legal_ids", default: [], array: true
    t.bigint "billing_id"
    t.bigint "receivement_id"
    t.bigint "clinic_id"
    t.boolean "has_tax_return", default: false
    t.boolean "has_booking", default: false
    t.boolean "has_legal", default: false
    t.boolean "has_billing", default: false
    t.boolean "has_receivement", default: false
    t.boolean "has_clinic", default: false
    t.index ["account_id"], name: "index_operation_account_products_on_account_id"
    t.index ["active"], name: "index_operation_account_products_on_active"
    t.index ["billing_id"], name: "index_operation_account_products_on_billing_id"
    t.index ["booking_id"], name: "index_operation_account_products_on_booking_id"
    t.index ["clinic_id"], name: "index_operation_account_products_on_clinic_id"
    t.index ["has_billing"], name: "index_operation_account_products_on_has_billing"
    t.index ["has_booking"], name: "index_operation_account_products_on_has_booking"
    t.index ["has_legal"], name: "index_operation_account_products_on_has_legal"
    t.index ["has_receivement"], name: "index_operation_account_products_on_has_receivement"
    t.index ["has_tax_return"], name: "index_operation_account_products_on_has_tax_return"
    t.index ["legal_ids"], name: "index_operation_account_products_on_legal_ids"
    t.index ["receivement_id"], name: "index_operation_account_products_on_receivement_id"
    t.index ["tax_return_id"], name: "index_operation_account_products_on_tax_return_id"
  end

  create_table "operation_clinic_licenses", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.bigint "company_id"
    t.bigint "clinic_id"
    t.string "code"
    t.integer "warn_with"
    t.integer "type"
    t.date "modified_on"
    t.date "expire_on"
    t.integer "status"
    t.index ["active"], name: "index_operation_clinic_licenses_on_active"
    t.index ["clinic_id"], name: "index_operation_clinic_licenses_on_clinic_id"
    t.index ["code"], name: "index_operation_clinic_licenses_on_code"
    t.index ["company_id"], name: "index_operation_clinic_licenses_on_company_id"
    t.index ["status"], name: "index_operation_clinic_licenses_on_status"
    t.index ["type"], name: "index_operation_clinic_licenses_on_type"
  end

  create_table "operation_clinic_partners", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.bigint "company_id"
    t.bigint "account_id"
    t.string "name"
    t.string "cpf"
    t.boolean "financial"
    t.boolean "operational"
    t.boolean "admnistrative"
    t.boolean "doctor"
    t.boolean "legal"
    t.boolean "technical"
    t.integer "shares"
    t.date "entried_at"
    t.date "exited_at"
    t.text "exited_description"
    t.index ["account_id"], name: "index_operation_clinic_partners_on_account_id"
    t.index ["active"], name: "index_operation_clinic_partners_on_active"
    t.index ["admnistrative"], name: "index_operation_clinic_partners_on_admnistrative"
    t.index ["company_id"], name: "index_operation_clinic_partners_on_company_id"
    t.index ["cpf"], name: "index_operation_clinic_partners_on_cpf"
    t.index ["doctor"], name: "index_operation_clinic_partners_on_doctor"
    t.index ["financial"], name: "index_operation_clinic_partners_on_financial"
    t.index ["legal"], name: "index_operation_clinic_partners_on_legal"
    t.index ["name"], name: "index_operation_clinic_partners_on_name"
    t.index ["operational"], name: "index_operation_clinic_partners_on_operational"
    t.index ["technical"], name: "index_operation_clinic_partners_on_technical"
  end

  create_table "operation_clinic_passwords", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.bigint "company_id"
    t.bigint "clinic_id"
    t.string "certificate_pass"
    t.string "issue_pass"
    t.string "license_pass"
    t.index ["active"], name: "index_operation_clinic_passwords_on_active"
    t.index ["clinic_id"], name: "index_operation_clinic_passwords_on_clinic_id"
    t.index ["company_id"], name: "index_operation_clinic_passwords_on_company_id"
  end

  create_table "operation_clinic_social_contracts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.bigint "company_id"
    t.decimal "social_capital"
    t.integer "shares"
    t.text "social_object"
    t.text "administration_clause"
    t.text "profit_distribution"
    t.integer "tax_regime"
    t.integer "special_tax_regime"
    t.integer "legal_nature"
    t.string "registry_number"
    t.string "regional_tax_number"
    t.string "municipal_tax_number"
    t.index ["active"], name: "index_operation_clinic_social_contracts_on_active"
    t.index ["company_id"], name: "index_operation_clinic_social_contracts_on_company_id"
    t.index ["legal_nature"], name: "index_operation_clinic_social_contracts_on_legal_nature"
    t.index ["municipal_tax_number"], name: "index_operation_clinic_social_contracts_on_municipal_tax_number"
    t.index ["regional_tax_number"], name: "index_operation_clinic_social_contracts_on_regional_tax_number"
    t.index ["registry_number"], name: "index_operation_clinic_social_contracts_on_registry_number"
    t.index ["special_tax_regime"], name: "index_operation_clinic_social_contracts_on_special_tax_regime"
    t.index ["tax_regime"], name: "index_operation_clinic_social_contracts_on_tax_regime"
  end

  create_table "product_entities", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.integer "status"
    t.boolean "blocked", default: false, null: false
    t.bigint "account_id"
    t.bigint "company_id"
    t.integer "name"
    t.integer "kind"
    t.string "uniq_product"
    t.decimal "amount", default: "0.0"
    t.date "started_at"
    t.integer "month_started_at"
    t.integer "year_started_at"
    t.text "notes"
    t.string "slug"
    t.index ["account_id"], name: "index_product_entities_on_account_id"
    t.index ["active"], name: "index_product_entities_on_active"
    t.index ["blocked"], name: "index_product_entities_on_blocked"
    t.index ["company_id"], name: "index_product_entities_on_company_id"
    t.index ["kind"], name: "index_product_entities_on_kind"
    t.index ["month_started_at"], name: "index_product_entities_on_month_started_at"
    t.index ["name"], name: "index_product_entities_on_name"
    t.index ["slug"], name: "index_product_entities_on_slug"
    t.index ["started_at"], name: "index_product_entities_on_started_at"
    t.index ["status"], name: "index_product_entities_on_status"
    t.index ["uniq_product"], name: "index_product_entities_on_uniq_product", unique: true
    t.index ["year_started_at"], name: "index_product_entities_on_year_started_at"
  end

  create_table "user_permissions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.bigint "user_id"
    t.string "feature_name"
    t.bigint "feature_id"
    t.string "token"
    t.boolean "can_create", default: false
    t.boolean "can_update", default: false
    t.boolean "can_delete", default: false
    t.boolean "can_read", default: false
    t.boolean "can_list", default: false
    t.boolean "can_show", default: false
    t.boolean "can_index", default: false
    t.boolean "can_report", default: false
    t.boolean "can_select", default: false
    t.boolean "can_assign", default: false
    t.boolean "can_copy", default: false
    t.boolean "can_copy_text", default: false
    t.boolean "can_download", default: false
    t.boolean "can_upload", default: false
    t.boolean "can_manage", default: false
    t.boolean "can_email", default: false
    t.boolean "can_notification", default: false
    t.index ["active"], name: "index_user_permissions_on_active"
    t.index ["can_assign"], name: "index_user_permissions_on_can_assign"
    t.index ["can_copy"], name: "index_user_permissions_on_can_copy"
    t.index ["can_copy_text"], name: "index_user_permissions_on_can_copy_text"
    t.index ["can_create"], name: "index_user_permissions_on_can_create"
    t.index ["can_delete"], name: "index_user_permissions_on_can_delete"
    t.index ["can_download"], name: "index_user_permissions_on_can_download"
    t.index ["can_email"], name: "index_user_permissions_on_can_email"
    t.index ["can_index"], name: "index_user_permissions_on_can_index"
    t.index ["can_list"], name: "index_user_permissions_on_can_list"
    t.index ["can_manage"], name: "index_user_permissions_on_can_manage"
    t.index ["can_notification"], name: "index_user_permissions_on_can_notification"
    t.index ["can_read"], name: "index_user_permissions_on_can_read"
    t.index ["can_report"], name: "index_user_permissions_on_can_report"
    t.index ["can_select"], name: "index_user_permissions_on_can_select"
    t.index ["can_show"], name: "index_user_permissions_on_can_show"
    t.index ["can_update"], name: "index_user_permissions_on_can_update"
    t.index ["can_upload"], name: "index_user_permissions_on_can_upload"
    t.index ["feature_id"], name: "index_user_permissions_on_feature_id"
    t.index ["feature_name"], name: "index_user_permissions_on_feature_name"
    t.index ["token"], name: "index_user_permissions_on_token", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "cpf", default: "", null: false
    t.boolean "active", default: true, null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.integer "account_kind"
    t.integer "sex"
    t.string "token"
    t.boolean "blocked"
    t.datetime "blocked_at"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.datetime "last_sign_out_at"
    t.datetime "current_request_at"
    t.datetime "previous_request_at"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_kind"], name: "index_users_on_account_kind"
    t.index ["blocked"], name: "index_users_on_blocked"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["cpf"], name: "index_users_on_cpf", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["sex"], name: "index_users_on_sex"
    t.index ["slug"], name: "index_users_on_slug", unique: true
    t.index ["token"], name: "index_users_on_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "account_entities", "users"
  add_foreign_key "operation_account_products", "account_entities", column: "account_id"
  add_foreign_key "operation_account_products", "product_entities", column: "billing_id"
  add_foreign_key "operation_account_products", "product_entities", column: "booking_id"
  add_foreign_key "operation_account_products", "product_entities", column: "clinic_id"
  add_foreign_key "operation_account_products", "product_entities", column: "receivement_id"
  add_foreign_key "operation_account_products", "product_entities", column: "tax_return_id"
  add_foreign_key "operation_clinic_licenses", "company_entities", column: "company_id"
  add_foreign_key "operation_clinic_licenses", "product_entities", column: "clinic_id"
  add_foreign_key "operation_clinic_partners", "company_entities", column: "company_id"
  add_foreign_key "operation_clinic_passwords", "company_entities", column: "company_id"
  add_foreign_key "operation_clinic_passwords", "product_entities", column: "clinic_id"
  add_foreign_key "operation_clinic_social_contracts", "company_entities", column: "company_id"
  add_foreign_key "product_entities", "account_entities", column: "account_id"
  add_foreign_key "product_entities", "company_entities", column: "company_id"
  add_foreign_key "user_permissions", "feature_permissions", column: "feature_id"
  add_foreign_key "user_permissions", "users"
end
