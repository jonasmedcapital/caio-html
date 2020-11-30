module Users
  class UserPolicy

    def initialize(current_user_id)
      @current_user_id = current_user_id
      @user = user
    end

    def user
      @user ||= ::Users::UserRepository.new.find_by_id(@current_user_id)
    end

    def can_current_user_user_list?
      (current_admin? || current_team?) && can_list?
    end

    def can_current_user_user_create?
      (current_admin? || current_team?) && can_create?
    end

    def can_current_user_user_read?
      (current_admin? || current_team?) && can_read?
    end

    def can_current_user_user_update?
      (current_admin? || current_team?) && can_update?
    end

    def can_current_user_user_delete?
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
      ::Users::PermissionRepository.new.find_by_action(user, "users", "list")
    end

    def can_read?
      ::Users::PermissionRepository.new.find_by_action(user, "users", "read")
    end

    def can_index?
      ::Users::PermissionRepository.new.find_by_action(user, "users", "index")
    end

    def can_create?
      ::Users::PermissionRepository.new.find_by_action(user, "users", "create")
    end

    def can_show?
      ::Users::PermissionRepository.new.find_by_action(user, "users", "show")
    end

    def can_update?
      ::Users::PermissionRepository.new.find_by_action(user, "users", "update")
    end

    def can_delete?
      ::Users::PermissionRepository.new.find_by_action(user, "users", "delete")
    end

  end
end