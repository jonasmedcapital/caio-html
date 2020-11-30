class ApplicationController < ActionController::Base
  include Permissible
  

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :require_user
  # before_action :define_permission, if: :web_controller?
  # before_action :define_navbar_permissions, if: :web_controller?
  # before_action :define_breadcrumb, if: :web_controller?
  # before_action :define_web_socket_url

  # skip_before_action :require_user, only: [:list, :create, :read, :update]
  # skip_before_action :verify_authenticity_token

  def after_sign_in_path_for(resource)
    dashboard_path
  end

  def after_resetting_password_path_for(resource)
    dashboard_path
  end

  def after_sign_out_path_for(resource)
    new_user_session_path
  end

  def check_for_mobile
    session[:mobile_override] = params[:mobile] if params[:mobile]
    prepare_for_mobile if mobile_device?
  end

  def prepare_for_mobile
    prepend_view_path Rails.root + 'app' + 'views_mobile'
  end

  def mobile_device?
    if session[:mobile_override]
      session[:mobile_override] == "1"
    else
      # Season this regexp to taste. I prefer to treat iPad as mobile.
      (request.user_agent =~ /(iPhone|iPod|Android|webOS|Mobile)/) || (request.user_agent =~ /(tablet|ipad)|(android(?!.*mobile))/i)
    end
  end
  helper_method :mobile_device?
  # helper_method :current_admin
  

  protected

  def set_user
    # cookies[:username] = current_user.name || 'guest'
  end

  def configure_permitted_parameters
    added_attrs = [ :cpf, :email, :name, :password, :password_confirmation, :remember_me ]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

  def require_user
    if current_user
      if current_user.blocked?
        redirect_to blocked_user_path
      elsif web_controller?
        redirect_to dashboard_path unless current_user_can?
      end
    else
      if web_controller?
        if request.path.split("/a/")[1]
          redirect_to controller: "/web/pages", action: "autologin", id: "login", q: request.path
        elsif request.path.split("/d/")[1]
          redirect_to controller: "/web/pages", action: "autologin", id: "login", q: request.path
        else
          redirect_to root_path
        end
        # redirect_to root_path
      elsif api_controller?
        redirect_to root_path, status: :unauthorized
      end
    end
  end

  def require_same_user(obj_user)
    if obj_user != current_user && current_user.super_admin == false
      redirect_to dashboard_path
    end
  end

  def current_user_can?
    permission = UserPermissions.new(current_user, request).current_user_can?
    return permission
  end

  def define_permission
    if current_user
      # @permission = UserPermissions.new(current_user, request).all_permissions
      @permission = UserPermissions.new(current_user, request).define_web_permissions
    end
  end

  def define_navbar_permissions
    if current_user
      @navbar_permissions = navbar_permissions
    end
  end
  

  def define_breadcrumb
    if current_user
      @url = breadcrumb_url
    end
  end

  def define_web_socket_url
    @web_socket_url = web_socket_url
  end

  

end
