class Web::PagesController < ApplicationController

  skip_before_action :require_user, only: [:home]

  def home
    if current_user
      redirect_to dashboard_path
    end
  end

  def dashboard
    
  end
  

end