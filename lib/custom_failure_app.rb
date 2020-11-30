class CustomFailureApp < Devise::FailureApp
  def redirect
    store_location!
    path = store_location!
    message = warden.message || warden_options[:message]
    if message == :timeout
      flash[:timeout] = "Sua sessão expirou. Por favor, faça login novamente para continuar."

      if path.split("/a/")[1]
        redirect_to controller: "/web/pages", action: "autologin", id: "login", q: path
      elsif path.split("/d/")[1]
        redirect_to controller: "/web/pages", action: "autologin", id: "login", q: path
      else
        redirect_to root_path
      end
    else 
      super
    end
  end

  def redirect_url
    # new_user_session_url(:subdomain => 'secure')
    root_url
  end

  # You need to override respond to eliminate recall
  def respond
    if http_auth?
      http_auth
    else
      redirect
    end
  end
end