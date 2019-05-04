class Api::UsersController < ApplicationController
  include AuthableController

  def create
    @user = User.new(email_or_phone: new_user_params[:email_or_phone], password: new_user_params[:password])
    @user.save
    login(@user)
    # Add error handling - UniqueViolation, NullViolation, etc.

    render :index
  end

  private

    def new_user_params
      params.require(:user).permit(:email_or_phone, :password)
    end

    def update_user_params
    end
end
