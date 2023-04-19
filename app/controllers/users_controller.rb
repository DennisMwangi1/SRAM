class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
    def index
        users = User.all
        render json:users, except: :password_digest, status: :ok
    end
 
    def create
        user = User.create!(user_params)
        render json:user, status: :created
    end
    def update
        user = User.find_by(id:params[:id])
        if user
            user.update!(user_params)
            render json: user, status: :ok
        else
            render json: {error:'Not Authorized'}, status: :unauthorized
        end
    end
    
    private

    def record_not_found_response(not_found)
        render json: {error:not_found}, status: :not_found
    end

    def record_invalid_response(invalid)
        render json: {error:invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def user_params
        params.permit(:first_name,:last_name,:email,:location,:work_station,:about,:password,:password_confirmation, :pdf_files)
    end
end
