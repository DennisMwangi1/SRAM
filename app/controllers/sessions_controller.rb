class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        if user &. authenticate(params[:password])
            session[:user_id] = user.id
            render json:user, include: [:pdf_files, :friends, :inverse_friends], except:[:password_digest], status: :created
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end