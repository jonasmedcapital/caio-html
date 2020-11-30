class Users::Allowed

  def initialize(feature_name, action)
    @feature_name = feature_name
    @feature = feature
    @action = action
  end

  def feature
    @feature  ||= ::Users::Permissions::FeatureRepository.find_by_name(@feature_name)
  end

  def who_can
    users = []
    action_column = "can_" + @action
    # quoted_column = "#{User::Permission.connection.quote_column_name(action_column)}"
    user_permissions = User::Permission.where(active: true, feature_id: @feature.id).where(action_column => true)

    user_permissions.each do |user|
      users << user.user
    end

    return users
    
  end
  
  

end