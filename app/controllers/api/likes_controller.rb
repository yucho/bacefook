class Api::LikesController < ApplicationController
  before_action :set_like, only: [:destroy]

  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like, status: :ok
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  def index
    @likes = Like.all
  end

  def destroy
    if @like.user === current_user
      @like.destroy
    end
    head :no_content
  end

  private

  def set_like
    @like = Like.find(params[:id])
  end

  def like_params
    params.require(:like).permit(:user_id, :likeable_id, :likeable_type, :reaction)
  end
end
