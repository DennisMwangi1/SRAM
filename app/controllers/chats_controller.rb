class ChatsController < ApplicationController
    def index
        hash = (friend_params)
        friend_id = hash["friend_id"]
        user_id = hash["user_id"]
        user = User.find(friend_id)
        chats = Chat.where(
          "(sender_id = :current_user_id AND recipient_id = :friend_id) OR (sender_id = :friend_id AND recipient_id = :current_user_id)",
          current_user_id: user_id,
          friend_id: friend_id
        ).order(created_at: :asc)
        respond_to do |format|
          format.json { render json: chats }
        end
    end
    
    def create
      chat = Chat.new(chat_params)
      if chat.save
        render json: chat, status: :created
      else
        render json: { error: 'Failed to create chat' }, status: :unprocessable_entity
      end
    end
    
    private
    
    def friend_params
      params.permit(:friend_id, :user_id).transform_values(&:to_i)
    end
    
    def chat_params
      params.require(:chat).permit(:sender_id, :recipient_id, :body)
    end
  end
  