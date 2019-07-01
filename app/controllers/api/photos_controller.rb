class Api::PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :destroy]
  before_save :ensure_post

  def create
    @photo = Photo.new(comment_params)

    if @photo.save
      render json: @photo, status: :ok
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  def index
    @photos = Photo.where(account: current_user)
  end

  def destroy
    @photo.destroy
    head :no_content
  end

  private

  def photo_params
    params.require(:photo).permit(:id, :account_id, :account_type, :post_id, :file)
  end

  def set_photo
    @photo = Photo.find(params[:id])
  end

  def ensure_post
    @photo.post = current_user.posts.create unless @photo.post
  end
end
