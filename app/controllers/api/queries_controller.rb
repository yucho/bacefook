class Api::QueriesController < ApplicationController
  include QueryableController

  def create
    render json: { error: "You must log in" } unless logged_in?

    defaults = { "path" => "index" }
    query = defaults.merge(query_params.as_json)
    json = parse_request(query)

    render json: json
  end

  private
    def query_params
      # path : React path, page : pagination number
      params.require(:query).permit(:path, :page)
    end
end
