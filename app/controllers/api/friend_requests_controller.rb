class Api::FriendRequestsController < ApplicationController
  before_action :set_friend_request, except: [:index, :create]
  
  def index
    @incoming = FriendRequest.where(friend: current_user).order(created_at: :desc)
    @outgoing = current_user.friend_requests.order(created_at: :desc)
    render json: {incoming: @incoming, outgoing: @outgoing}
  end

  def create
    friend = User.find(params[:friend_id])
    @friend_request = current_user.friend_requests.new(friend: friend)
    if(!logged_in?)
      render json: { errors: ["You must log in"] }, status: :unprocessable_entity
    elsif(@friend_request.save)
      # render :show, status: :created, location: @friend_request
      render json: { message: ["success"] }, status: :created
    else
      render json: @friend_request.errors, status: :unprocessable_entity
    end
  end

  def update
    if(current_user != @friend_request.friend)
      render json: { errors: ["Request is not for you"] }, status: :unprocessable_entity
    else
      @friend_request.accept
      head :no_content
    end
  end

  def destroy
    @friend_request.destroy
    head :no_content
  end

  private

  def set_friend_request
    @friend_request = FriendRequest.find(params[:id])
  end
end
