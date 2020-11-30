class Users::PermissionRepository < Base
  
  def build(user_id, feature_id, feature_name)
    @permission ||= entity.new(user_id: user_id, feature_id: feature_id, feature_name: feature_name)
  end

  def all
    all_base
  end

  def self.all_active
    entity.where(active: true)
  end
  
  def all_active
    entity.where(active: true)
  end

  def self.find_by_id(id)
    entity.find_by(id: id)
  end

  def find_by_action(user, feature, action)
    action = "can_" + action
    permission = all_active.where(user_id: user.id, feature_id: feature.id).first

    if permission
      return permission[action]
    else
      return false
    end
  end

  def self.find_by_feature_name(user, feature_name)
    feature = ::Users::Permissions::FeatureRepository.find_by_name(feature_name)
    permission = all_active.where(user_id: user.id, feature_id: feature.id).first
    if permission
      return permission
    else
      return Users::PermissionRepository.new.build(user.id, feature.id, feature.name)
    end
  end

  def self.find_by_feature(user, feature)
    permission = all_active.where(user_id: user.id, feature_id: feature.id).first
    if permission
      return permission
    else
      return Users::PermissionRepository.new.build(user.id, feature.id, feature.name)
    end
  end

  def self.find_by_feature_names(user, feature_names)
    permissions = []

    feature_names.each do |feature_name|
      feature = ::Users::Permissions::FeatureRepository.find_by_name(feature_name)
      permission = all_active.where(user_id: user.id, feature_id: feature.id).first

      if permission
        permission = permission
      else
        permission = Users::PermissionRepository.new.build(user.id, feature.id, feature.name)
      end
      permissions << permission if permission
    end

    return permissions
  end

  def self.check_if_has_permissions(user, feature_names)
    return false if feature_names.empty?
    return false if user.nil?
    has_permissions = []

    feature_names.each do |feature_name|
      feature = ::Users::Permissions::FeatureRepository.find_by_name(feature_name)
      permission = all_active.where(user_id: user.id, feature_id: feature.id).first

      if permission
        has_permissions << true
      else
        has_permissions << false
      end
    end

    return has_permissions.all?
  end
  

  def self.list_permissions_by_feature_names(permissions)
    mapper.mapper_by_feature_names(permissions)
  end

  def find_by_feature(user, feature)
    permission = all_active.where(user_id: user.id, feature_id: feature.id).first
    if permission
      return permission
    else
      return Users::PermissionRepository.new.build(user.id, feature.id, feature.name)
    end
  end

  def self.create_permission(permission_attributes)
    permission = entity.new
    permission.attributes = permission_attributes

    if permission.valid?
      permission.save
      return permission
    # else
    #   raise ActiveRecord::Rollback
    end
  end

  def self.set_token(permission)
    if permission.user_id
      user_code = permission.user_id.to_s(36).rjust(4,"0").upcase
    else
      user_code = 0.to_s(36).rjust(4,"0").upcase
    end
    if permission.feature_id
      feature_code = permission.feature_id.to_s(36).rjust(4,"0").upcase
    else
      feature_code = 0.to_s(36).rjust(4,"0").upcase
    end

    token = "#{user_code}#{feature_code}"
    return token
  end

  def self.team_with_action_permission(feature_name, action)
    action = "can_" + action
    feature = ::Users::Permissions::FeatureRepository.find_by_name(feature_name)

    user_ids = User.where("account_kind = ? OR account_kind = ?", 0, 1).ids
    can_ids = []
    user_ids.each do |user_id|
      permission = all_active.where(user_id: user_id, feature_id: feature.id).first
      if permission && permission[action]
        can_ids << user_id
      end
    end

    return User.where(id: can_ids)
  end
  

  def self.list_permissions_by_group(user, current_user, feature)
    mapper.map_permissions_by_group(user, current_user, feature)
  end

  def count
    all.count
  end

  def first
    all.first
  end

  def second
    all.second
  end
  
  def last
    all.last
  end

  private

  def entity
    "User::Permission".constantize
  end

  def self.entity
    "User::Permission".constantize
  end

  def self.mapper
    "Users::PermissionMapper".constantize
  end
  

end