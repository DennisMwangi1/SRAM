class DropMessage < ActiveRecord::Migration[7.0]
  def change
    drop_table :new_table_messages
  end
end
