class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.integer "sender_id"
      t.integer "recipient_id"
      t.text "body"
      t.boolean "read", default: false
      t.timestamps
    end
  end
end
