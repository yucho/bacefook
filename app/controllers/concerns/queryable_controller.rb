# Note: any controller that includes this module will have default render
# overriden by render_json method. Set @query to pass information and define
# here what your controller should render

module QueryableController
  extend ActiveSupport::Concern

  def render_json(query={})
    return render json: { errors: ["You must log in"] } unless logged_in?

    initialize_query_response(query)    
    render json: json_response
  end

  def render_json_as_string(query={})
    initialize_query_response(query)    
    json_response.to_json.html_safe
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
        users: User.all.as_json(only: [:id, :first_name, :last_name, :email, :phone, :posts]),
        posts: Post.all.as_json(only: [:id, :body, :poster_id, :poster_type, :postable_id, :postable_type])
      }
    end
end
