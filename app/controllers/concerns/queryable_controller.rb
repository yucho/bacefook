module QueryableController
  extend ActiveSupport::Concern

  def render_json(query={})
    return if performed?

    return render json: { errors: ["You must log in"] } unless logged_in?

    initialize_query_response(query)    
    render json: json_response
  end

  def default_json_response(json)
    @default_json_response = json
  end

  def append_json_response(json)
    @append_json_response = json
  end

  private

    def default_render
      render_json
    end

    def initialize_query_response(query)
      default_query = { path: "/" }
      @query ||= {}
      @query = default_query.merge(@query).merge(query)
      @default_json_response ||= {}
      @append_json_response ||= {}
    end

    def json_response
      @default_json_response.merge(parse_request).merge(@append_json_response)
    end

    def parse_path(path)
      URI(path).path
    end

    def parse_request
      case(@query[:path])
      when "/"
        news_feed(current_user)
      end
    end

    def news_feed(user)
      {
        users: User.all.as_json(only: [:id, :email, :phone])
      }
    end
end
