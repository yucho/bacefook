class Api::PostPhotosController < Api::PhotosController
  def index
    @post = Post.find(params[:post_id])
    @photos = @post.photos
    super
  end
end
