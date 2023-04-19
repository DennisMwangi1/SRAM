class ApplicationController < ActionController::Base
    before_action :set_cors_headers
    private

  def set_cors_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:3001' # or your React app's URL
    headers['Access-Control-Allow-Credentials'] = 'true'
  end
end
