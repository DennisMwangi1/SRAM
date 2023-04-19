class AddSenderAndRecipientToConversations < ActiveRecord::Migration[7.0]
  def change
    add_column :conversations, :sender_id, :integer
    add_column :conversations, :recipient_id, :integer
  end
end
