class CreateFeaturePermissions < ActiveRecord::Migration[5.2]
  def change
    create_table :feature_permissions do |t|
      t.timestamps
      t.boolean :active, default: true, null: false
      t.string :group
      t.string :name
      t.string :humanize
      t.text :notes
    end

    add_index :feature_permissions, :group
    add_index :feature_permissions, :name
    add_index :feature_permissions, :active
  end
end
