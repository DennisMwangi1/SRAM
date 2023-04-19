require_relative "boot"

require "rails/all"
require "rack/cors"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Karma
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.action_controller.allow_forgery_protection = false
    config.load_defaults 7.0
    config.middleware.use ActionDispatch::Cookies do
      # Set the same_site option for cookies
      if defined?(ActionDispatch::Cookies::CookieJar)
        ActionDispatch::Cookies::CookieJar.same_site_protection = :strict
      else
        Rails.logger.warn "Could not set same_site_protection option for cookies"
      end
    end
    config.middleware.use ActionDispatch::Session::CookieStore

    # Configuration for the application, engines, and railties goes here.
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
    # ...
  
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
