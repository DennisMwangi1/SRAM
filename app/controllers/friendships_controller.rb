class FriendshipsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
    def create
        friend= Friendship.create!(friendship_params)
        render json:friend, except: :password_digest, status: :created
    end
  
    private
  
    def friendship_params
      params.require(:friendship).permit(:user_id, :friend_id)
    end
    def record_invalid_response(invalid)
        render json: {error:invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  end
  