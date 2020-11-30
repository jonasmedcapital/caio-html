 module Permissible
    extend ActiveSupport::Concern

    def web_controller?
      return false unless controller_path.split("/").first == "web" && session_controller?
      true
    end

    def api_controller?
      return false unless controller_path.split("/").first == "api"
      true
    end

    def session_controller?
      return true unless controller_path == "web/users/sessions"
      false
    end

    def navbar_permissions
      accounts = {}
      current_user.defined_enums["account_kind"].keys.each do |kind|
        accounts = accounts.merge({kind => current_user.send("__#{kind}?")})
      end

      page = {}
      NAV_ITEMS[current_user.account_kind_in_database].each do |feature_name|
        feature = ::Users::Permissions::FeatureRepository.find_by_name(feature_name)
        page = page.merge({feature_name => ::Users::PermissionRepository.new.find_by_action(current_user, feature, "index")})
      end
      
      copy = true
      permissions = NavPermission.new(accounts, page, copy)
    end

    def can_user_controller_action
      path = "/" + request.path.split("/").third
      feature_name = Users::Permissions::TranslateRequestToPermissions::PATH[path]
      action = action_name
      feature = ::Users::Permissions::FeatureRepository.find_by_name(feature_name)
      can_user = ::Users::PermissionRepository.new.find_by_action(current_user, feature, action)
      return can_user
    end
    
    
    private

    NavPermission = Struct.new(:account, :page, :copy)

    NAV_ITEMS = {
                  "admin" => ["dashboard", "profile", "marketing", "sales", "operations", "contents", "generators", "settings", "reports", "develop"],
                  "team" => ["dashboard", "profile", "marketing", "sales", "operations", "contents", "generators", "settings", "develop"],
                  "doctor" => ["dashboard", "profile"],
                }
    
 end