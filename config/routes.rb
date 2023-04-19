Rails.application.routes.draw do
  resources :pdf_files
  resources :users
  resources :friendships
  get '/users/:user_id/friends', to: 'friends#index'
  resources :chats
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  get '/users/:user_id/pdf_files', to: 'pdf_files#index', as: 'user_pdf_files'
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
