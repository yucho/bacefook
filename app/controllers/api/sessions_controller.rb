class Api::SessionsController < ApplicationController
  include AuthableController

  def create
    @user = User.find_by_credential(session_params[:email_or_phone], session_params[:password])
    login(@user)
    render "api/users/index"
  end

  def destroy
    logout!
    render "api/users/index"
  end


  private

    def session_params
      params.require(:session).permit(:email_or_phone, :password)
    end
end
