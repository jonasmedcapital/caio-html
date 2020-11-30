Rails.application.routes.draw do

  devise_for :users,
    path: '',
    path_names: {sign_in: 'entrar',
                 sign_out: 'sair',
                 edit: 'dados-acesso/editar',
                 password: 'senha',
                 sign_up: "97hm4An0M6o2u0Wys6KyoLH88RSlpZHC2cEH94uEQSyOcwfn",
                 confirmation: "confirmacao",
                 unlock: "RGHnLUassurePx2f7dl1TTFG1x6dmPc799C80HHKEsItQJUN"},
    controllers: {
      sessions: 'web/users/sessions',
      confirmations: 'web/users/confirmations',
      passwords: 'web/users/passwords',
      registrations: 'web/users/registrations',
      unlocks: 'web/users/unlocks'
    }
  as :user do
    get "/esqueci-minha-senha", to: "web/users/passwords#forgotten", as: :esqueci_minha_senha
  end

  namespace :api, path: '/' do
    namespace :v1, path: '/' do

      namespace :validations do
        post "forms/validate", to: "forms#validate"
        post "forms/validate_lead", to: "forms#validate_lead"
        post "forms/validate_field", to: "forms#validate_field"
        post "forms/validate_user_password", to: "forms#validate_user_password"
        post "logins/validate", to: "logins#validate"  
      end

    end
  end

  

  get "/dashboard", to: "web/pages#dashboard"
  root "web/pages#home"

end
