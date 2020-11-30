class UserPermissions

  attr_accessor :admin, :doctor, :team, :helper, :patient, :feature, :can_create, :can_update, :can_delete, :can_read, :can_index, :can_report, :can_select, :can_show, :can_copy, :can_assign, :can_list, :can_copy_text, :can_download, :can_upload

  def initialize(current_user, request)
    @current_user = current_user
    @controller = request.params[:controller]
    @action = request.params[:action]
    @request = request
    @path = @request.path
    @feature = feature
  end

  def feature
    feature_name = feature_name_by_web_controller
    @feature  ||= ::Users::Permissions::FeatureRepository.find_by_name(feature_name)
  end  
  
  def define_web_permissions
    return ::Users::PermissionMapper.new.map current_user_permissions
  end

  def current_user_permissions
    ::Users::PermissionRepository.find_by_feature(@current_user, @feature)
  end

  def all_permissions
    return ::Users::PermissionMapper.new.map current_user_permissions
  end

  def current_user_can?
    action = feature_by_action(@action)
    return ::Users::PermissionRepository.new.find_by_action(@current_user, @feature, action)
  end

  private

  def web_controller
    if FIXED_CONTROLLERS.include?(@controller.split("/").last)
      return @action
    else
      return feature_by_controller
    end
  end

  def feature_by_controller
    names = User::Permission::Feature.pluck(:name)
    if names.include?(@controller.split("/").last)
      return @controller.split("/").last
    elsif names.include?(@controller.split("/").second_to_last)
      return @controller.split("/").second_to_last
    elsif names.include?(@controller.split("/").third_to_last)
      return @controller.split("/").third_to_last
    end
  end

  def feature_name_by_web_controller
    if admins_path?
      if @request.params["id"].present?
        path = "/" + @request.path.split("/a/")[1].split("/").second_to_last + "/" + @request.params["action"]
      else
        path = "/" + @request.path.split("/a/")[1].split("/").last + "/" + @request.params["action"]
      end
      Users::Permissions::TranslateRequestToPermissions::PATH["/" + @request.path.split("/a/")[1].split("/")[0]]
    elsif doctors_path?
      if @request.params["id"].present?
        path = "/" + @request.path.split("/d/")[1].split("/").second_to_last + "/" + @request.params["action"]
      else
        path = "/" + @request.path.split("/d/")[1].split("/").last + "/" + @request.params["action"]
      end
      Users::Permissions::TranslateRequestToPermissions::PATH["/" + @request.path.split("/d/")[1].split("/")[0]]
    else
      Users::Permissions::TranslateRequestToPermissions::PATH[@request.path]
    end
    
  end
  
  
  

  def feature_by_web_controller(controller, action, path)
    return ::Users::Permissions::TranslateRequestToPermissions::PATH[path]
  end

  def feature_by_action(action)
    if ["create", "update", "delete", "read", "list", "show", "index"].include?(@action)
      return @action
    else
      return ::Users::Permissions::TranslateRequestToPermissions::ACTION[@action]
    end
  end

  def admins_path?
    @request.path.include?("/a/") && (@current_user.account_kind == "admin" || @current_user.account_kind == "team")
  end
  
  def doctors_path?
    @request.path.include?("/d/")
  end
  
  
  FIXED_CONTROLLERS = ["pages"]

end