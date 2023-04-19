class CreateNewTableMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :new_table_messages do |t|
      t.integer "sender_id"
      t.integer "recipient_id"
      t.text "body"
      t.boolean "read", default: false
      t.timestamps
    end
  end
end
