require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Bacefook
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Eager load all files in ./lib (lazy if environment config.eager_load = false)
    config.eager_load_paths << Rails.root.join('lib')

    # Disable generating unwanted files to unclutter app
    config.generators do |generate|
      generate.helper false
      generate.assets false
      generate.view_specs false
    end
  end
end
