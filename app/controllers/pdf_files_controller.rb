class PdfFilesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        @user = User.find(params[:user_id])
        @pdf_files = @user.pdf_files
    
        render json: @pdf_files
    end
    def show
        pdf = PdfFile.find(params[:id])
        if pdf
        render json: pdf, status: :ok
        else
            render json: {}, status: :not_found
        end
    end

    def create
        file = PdfFile.create!(pdf_file_params)
        render json:file, status: :created
    end
    
      private
    
      def pdf_file_params
        params.require(:pdf_file).permit(:name, :file_data, :user_id)
      end

      def record_not_found_response(not_found)
        render json: {error:not_found}, status: :not_found
    end

    def record_invalid_response(invalid)
        render json: {error:invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
      
end
