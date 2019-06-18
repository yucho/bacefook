class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credential(session_params[:email_or_phone], session_params[:password])
    if @user
      login(@user)
      render json: { currentUser: @user.id }
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
