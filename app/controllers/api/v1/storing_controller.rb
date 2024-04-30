class Api::V1::StoringController < ApplicationController
  def index
    @storing = Storing.all
    render json: @storing
  end
end
