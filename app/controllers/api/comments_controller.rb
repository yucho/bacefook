class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  def create
    @comment = Comment.new(comment_params)
    if(@comment.save)
      render json: @comment, status: :ok
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def index
    @comment = Comment.where(author: current_user)
  end

  def update
    @comment.update_attributes(comment_params)
    if(@comment.save)
      head :no_content
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    head :no_content
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :commenter_id, :commenter_type, :commentable_id, :commentable_type, :body)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end
end
