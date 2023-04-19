class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :recipient_id, null: false
      t.text :content, null: false
      t.boolean :read, default: false
      t.timestamps null: false
    end

    add_index :messages, [:sender_id, :recipient_id]
    add_index :messages, :sender_id
    add_index :messages, :recipient_id
    add_index :messages, [:recipient_id, :read]
  end
end
