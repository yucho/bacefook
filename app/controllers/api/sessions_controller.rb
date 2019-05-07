class Api::SessionsController < ApplicationController
  include QueryableController
  include AuthableController

  def create
    @user = User.find_by_credential(session_params[:email_or_phone], session_params[:password])
    if @user
      login(@user)
      append_json_response currentUser: current_user.uuid
    else
      render json: { errors: ["Invalid credentials"] }, status: :unprocessable_entity
    end
  end

  def destroy
    logout!
    render json: {}
  end

  private

    def session_params
      params.require(:session).permit(:email_or_phone, :password)
    end
end
