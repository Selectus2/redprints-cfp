class HomeController < ApplicationController
  skip_authentication

  def index
    render inertia: {
      oauth_providers: OmniAuth.providers
    }
  end
end
