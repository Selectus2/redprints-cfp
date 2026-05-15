module Auth
  class SessionsController < ApplicationController
    skip_authentication only: %i[new]

    def new
      render inertia: "auth/sessions/new", props: {
        oauth_providers: OmniAuth.providers
      }
    end

    def destroy
      cookies.delete(:session_token)
      reset_session

      redirect_to root_path
    end
  end
end
