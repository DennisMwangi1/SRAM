class FriendsController < ApplicationController
    def index
        user = User.find(params[:user_id])
        friends = user.friends
        render json: friends
      end

      private
      def user_id
        params.permit(:user_id)
      end
end
