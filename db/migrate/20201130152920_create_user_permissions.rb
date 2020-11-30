class CreateUserPermissions < ActiveRecord::Migration[5.2]
  def change
    create_table :user_permissions do |t|
      t.timestamps
      t.boolean :active, default: true, null: false
      t.bigint :user_id
      t.string :feature_name
      t.bigint :feature_id
      t.string :token
      t.boolean :can_create, default: false
      t.boolean :can_update, default: false
      t.boolean :can_delete, default: false
      t.boolean :can_read, default: false
      t.boolean :can_list, default: false
      t.boolean :can_show, default: false
      t.boolean :can_index, default: false
      t.boolean :can_report, default: false
      t.boolean :can_select, default: false
      t.boolean :can_assign, default: false
      t.boolean :can_copy, default: false
      t.boolean :can_copy_text, default: false
      t.boolean :can_download, default: false
      t.boolean :can_upload, default: false
      t.boolean :can_manage, default: false
      t.boolean :can_email, default: false
      t.boolean :can_notification, default: false
    end
   
    add_index :user_permissions, :active
    add_index :user_permissions, :feature_name
    add_index :user_permissions, :feature_id
    add_index :user_permissions, :token, unique: true
    add_index :user_permissions, :can_create
    add_index :user_permissions, :can_update
    add_index :user_permissions, :can_delete
    add_index :user_permissions, :can_read
    add_index :user_permissions, :can_list
    add_index :user_permissions, :can_show
    add_index :user_permissions, :can_index
    add_index :user_permissions, :can_report
    add_index :user_permissions, :can_select
    add_index :user_permissions, :can_assign
    add_index :user_permissions, :can_copy
    add_index :user_permissions, :can_copy_text
    add_index :user_permissions, :can_download
    add_index :user_permissions, :can_upload
    add_index :user_permissions, :can_manage
    add_index :user_permissions, :can_email
    add_index :user_permissions, :can_notification

    add_foreign_key :user_permissions, :feature_permissions, column: :feature_id
    add_foreign_key :user_permissions, :users, column: :user_id
   
  end
end
