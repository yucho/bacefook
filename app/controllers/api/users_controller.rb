class Api::UsersController < ApplicationController
  def create
    @user = User.new(new_user_params)
    if @user.save!
      login(@user)
      render :index
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

    def new_user_params
      params.require(:user).permit(:first_name, :last_name, :email_or_phone, :password, :birthday, :gender)
    end

    def update_user_params
    end
end
