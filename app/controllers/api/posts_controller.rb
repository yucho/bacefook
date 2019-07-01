class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  after_save :create_dependents

  def create
    # Temporarily write on your own timeline
    klass = post_params[:postable_type].constantize
    unless klass
      render json: { error: "#{post_params.postable_type} is not valid"}
      return
    end

    @post = current_user.posts.new(post_params)
    @post.postable = klass.find(post_params[:postable_id])
    if(@post.save)
      @post = Post.find(@post.id) # Because default is set by database
      render :show, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def index
    @posts = current_user.posts
    unless(@posts)
      render json: @posts.errors, status: :bad_request
    end
  end

  def update
    if(@post.update_attributes(post_params))
      render json: @post, status: :accepted
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if(@post.destroy)
      head :no_content
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end
  
  private

  def post_params
    params.require(:post).permit(:body, :postable_id, :postable_type, :files)
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def create_dependents
    if @post.files
      @post.files.each do |file|
        @post.photos << current_user.photos.create(file: file)
      end
    end
  end
end
