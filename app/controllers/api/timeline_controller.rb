class Api::TimelineController < ApplicationController
  def create
    user_id = params[:user_id]
    if user_id.nil?
      render json: { message: "Must provide user id" }
      return
    end

    begin
      @user = User.find(user_id)
    rescue
      render json: { message: "Cannot find user with id #{params[:user_id]}"}
      return
    end

    begin
      @timestamp = Time.parse(params[:timestamp])
    rescue
      @timestamp = Time.new
    end
  end
end
