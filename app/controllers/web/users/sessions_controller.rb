# frozen_string_literal: true

class Web::Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  # skip_before_action :require_user, only: [:forgotten, :create, :edit, :update]
  # before_action :check_for_mobile, only: [:edit, :forgotten]
  # skip_before_action :define_permission, only: [:create, :edit, :update]
  # skip_before_action :define_breadcrumb, only: [:create, :edit, :update]

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    if warden.authenticate
      self.resource = warden.authenticate!(auth_options)
      return false if resource.blocked
      sign_in(resource_name, resource)
      yield resource if block_given?
      render :json => {type: "success", process: true, message: "Login realizado com sucesso. Você será redirecionado para o seu Dashboard.", resource: resource, location: after_sign_in_path_for(resource)}.as_json
    else
      render :json => {type: "danger", process: false, message: "CPF ou Senha inválidos ou errados."}.as_json
    end
    # respond_with resource, location: after_sign_in_path_for(resource)
    # super
  end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
