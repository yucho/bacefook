Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :comments, only: [:create, :index, :show, :update, :destroy]
    resources :friend_requests, only: [:create, :index, :update, :destroy]
    resources :friends, only: [:index, :destroy]
  end

  root to: 'static_pages#root'
  get '*path', to: 'static_pages#root'
end
