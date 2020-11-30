module Users
  class PermissionPolicy

    def initialize(current_user_id)
      @current_user_id = current_user_id
      @user = user
    end

    def user
      @user ||= ::Users::UserRepository.new.find_by_id(@current_user_id)
    end

    def can_current_user_list_permission?
      (current_admin? || current_team?) && can_list?
    end

    def can_current_user_create_permission?
      (current_admin? || current_team?) && can_create?
    end

    def can_current_user_read_permission?
      (current_admin? || current_team?) && can_read?
    end

    def can_current_user_update_permission?
      (current_admin? || current_team?) && can_update?
    end

    def can_current_user_delete_permission?
      (current_admin? || current_team?) && can_delete?
    end  
    

    private

    def current_user?
      user.sign_in_count > 0 && user.confirmed?
    end

    def current_admin?
      current_user? && user.__admin?
    end

    def current_team?
      current_user? && user.__team?
    end

    def current_doctor?
      current_user? && user.__doctor?
    end

    def can_list?
      ::Users::PermissionRepository.new.find_by_action(user, "permissions", "list")
    end

    def can_read?
      ::Users::PermissionRepository.new.find_by_action(user, "permissions", "read")
    end

    def can_index?
      ::Users::PermissionRepository.new.find_by_action(user, "permissions", "index")
    end

    def can_create?
      ::Users::PermissionRepository.new.find_by_action(user, "permissions", "create")
    end

    def can_show?
      ::Users::PermissionRepository.new.find_by_action(user, "permissions", "show")
    end

    def can_update?
      ::Users::PermissionRepository.new.find_by_action(user, "permissions", "update")
    end

    def can_delete?
      ::Users::PermissionRepository.new.find_by_action(user, "permissions", "delete")
    end

  end
end