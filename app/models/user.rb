class User < ApplicationRecord
    has_many :pdf_files
    has_many :friendships
    has_many :friends, through: :friendships, source: :friend
    has_many :inverse_friendships, class_name: "Friendship", foreign_key: "friend_id"
    has_many :inverse_friends, through: :inverse_friendships, source: :user
    has_many :sent_chats, class_name: 'Chat', foreign_key: 'sender_id'
    has_many :received_chats, class_name: 'Chat', foreign_key: 'recipient_id'

    has_secure_password
end


