class Api::FriendsController < ApplicationController
  before_action :set_friend, only: :destroy

  def index
    render json: current_user.friends
  end

  def destroy
    if(current_user.remove_friend(@friend))
      render json: { message: "Removed friend" }, status: :success
    else
      head json: { message: "Friend does not exist"}, status: :unprocessable_entity
    end
  end

  private

  def set_friend
    @friend = current_user.friends.find(params[:id])
  end
end
