class UsersController < ApplicationController
  # before_action :authenticate_user! # Ensure user is authenticated

  def show
    render json: current_user 
  end
end
