class StaticPagesController < ApplicationController
  helper_method :image_paths

  def image_paths
    {
      "splash-logo": helpers.image_path("bacefook.png"),
      "header-logo": helpers.image_path("bacefook-icon.png")
    }.to_json.html_safe
  end

  private

    def default_render
      render :root
    end
end
