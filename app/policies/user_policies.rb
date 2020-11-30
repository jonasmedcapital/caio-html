class UserPolicies < Base

  def initialize(current_user_id, action, feature_name)
    @current_user_id = current_user_id
    @user = user
    @action = action
    @feature_name = feature_name
    @feature = feature
  end

  def user
    @user ||= ::Users::UserRepository.new.find_by_id(@current_user_id)
  end

  def feature
    @feature  ||= ::Users::Permissions::FeatureRepository.find_by_name(@feature_name)
  end
  

  def can_current_user?
    # (current_admin? || current_team?) && can?(@feature, @action)
    can?(@feature, @action)
  end

  private

  def can?(feature, action)
    ::Users::PermissionRepository.new.find_by_action(@user, @feature, action)
  end

  def current_user?
    @user.sign_in_count > 0 && user.confirmed?
  end

  def current_admin?
    current_user? && @user.__admin?
  end

  def current_team?
    current_user? && @user.__team?
  end

  def current_doctor?
    current_user? && @user.__doctor?
  end

end