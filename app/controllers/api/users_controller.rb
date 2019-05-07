class Api::UsersController < ApplicationController
  include QueryableController
  include AuthableController

  def create
    @user = User.new(email_or_phone: new_user_params[:email_or_phone], password: new_user_params[:password])
    if @user.save!
      login(@user)
      append_json_response currentUser: current_user.uuid
    end
  end

  private

    def new_user_params
      params.require(:user).permit(:email_or_phone, :password)
    end

    def update_user_params
    end
end
