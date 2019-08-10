class Api::NewsFeedController < ApplicationController
  def create
    @timestamp = Time.parse(params[:timestamp])
  rescue
    @timestamp = Time.new
  end
end
