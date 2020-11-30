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

ActiveRecord::Schema.define(version: 2020_11_30_152920) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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

  add_foreign_key "user_permissions", "feature_permissions", column: "feature_id"
  add_foreign_key "user_permissions", "users"
end
