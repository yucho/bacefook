Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resource :query, only: [:create]
  end

  root to: 'static_pages#root'
  get '*path', to: 'static_pages#root'
end
