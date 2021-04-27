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

  scope path: '/a' do
    get "/test", to: "web/pages#test"
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
  
  get "/agendar-mobile", to: "web/pages/modal/modal_mobiles#modal_mobile"
  get "/agendar-horario", to: "web/pages/modal/modal#modal_page"
  get "/formulario-entrada", to: "web/pages/forms/forms#dashboard"
  get "/land-white", to: "web/pages/landings/landings#land_white"
  get "/land-blue", to: "web/pages/landings/landings#land_blue"
  get "/planner/mobile/dashboard", to: "web/pages/taxreturn/mobile#dashboard"
  get "/planner/mobile/myplanner", to: "web/pages/taxreturn/mobile#myplanner"
  get "/planner/mobile/objetivos", to: "web/pages/taxreturn/mobile#objetivos"
  get "/planner/mobile/novo_objetivo_1", to: "web/pages/taxreturn/mobile#novo_objetivo_1"
  get "/planner/mobile/novo_objetivo_2", to: "web/pages/taxreturn/mobile#novo_objetivo_2"
  get "/planner/mobile/novo_objetivo_3", to: "web/pages/taxreturn/mobile#novo_objetivo_3"
  get "/planner/mobile/editar_objetivo_1", to: "web/pages/taxreturn/mobile#editar_objetivo_1"
  get "/planner/mobile/editar_objetivo_2", to: "web/pages/taxreturn/mobile#editar_objetivo_2"
  get "/planner/mobile/editar_objetivo_3", to: "web/pages/taxreturn/mobile#editar_objetivo_3"
  get "/planner/mobile/novo_aporte_1", to: "web/pages/taxreturn/mobile#novo_aporte_1"
  get "/planner/mobile/novo_aporte_2", to: "web/pages/taxreturn/mobile#novo_aporte_2"
  get "/planner/mobile/novo_aporte_3", to: "web/pages/taxreturn/mobile#novo_aporte_3"
  get "/planner/mobile/editar_aporte_1", to: "web/pages/taxreturn/mobile#editar_aporte_1"
  get "/planner/mobile/editar_aporte_2", to: "web/pages/taxreturn/mobile#editar_aporte_2"
  get "/planner/mobile/editar_aporte_3", to: "web/pages/taxreturn/mobile#editar_aporte_3"
  get "/planner/mobile/rendimentos", to: "web/pages/taxreturn/mobile#rendimentos"
  get "/planner/mobile/todos_rendimentos", to: "web/pages/taxreturn/mobile#todos_rendimentos"
  get "/planner/mobile/novo_rendimento_1", to: "web/pages/taxreturn/mobile#novo_rendimento_1"
  get "/planner/mobile/novo_rendimento_2", to: "web/pages/taxreturn/mobile#novo_rendimento_2"
  get "/planner/mobile/novo_rendimento_3", to: "web/pages/taxreturn/mobile#novo_rendimento_3"
  get "/planner/mobile/novo_rendimento_4", to: "web/pages/taxreturn/mobile#novo_rendimento_4"
  get "/planner/mobile/novo_rendimento_5", to: "web/pages/taxreturn/mobile#novo_rendimento_5"
  get "/planner/mobile/novo_rendimento_6", to: "web/pages/taxreturn/mobile#novo_rendimento_6"
  get "/planner/mobile/todos_rendimentos", to: "web/pages/taxreturn/mobile#todos_rendimentos"
  get "/planner/mobile/editar_rendimento_1", to: "web/pages/taxreturn/mobile#editar_rendimento_1"
  get "/planner/mobile/editar_rendimento_2", to: "web/pages/taxreturn/mobile#editar_rendimento_2"
  get "/planner/mobile/editar_rendimento_3", to: "web/pages/taxreturn/mobile#editar_rendimento_3"
  get "/planner/mobile/editar_rendimento_4", to: "web/pages/taxreturn/mobile#editar_rendimento_4"
  get "/planner/mobile/editar_rendimento_5", to: "web/pages/taxreturn/mobile#editar_rendimento_5"
  get "/planner/mobile/editar_rendimento_6", to: "web/pages/taxreturn/mobile#editar_rendimento_6"
  get "/planner/mobile/fontes", to: "web/pages/taxreturn/mobile#fontes"
  get "/planner/mobile/pessoa_fisica", to: "web/pages/taxreturn/mobile#pessoa_fisica"
  get "/planner/mobile/fpessoa_juridica", to: "web/pages/taxreturn/mobile#pessoa_juridica"
  get "/planner/mobile/despesas_dedutiveis", to: "web/pages/taxreturn/mobile#despesas_dedutiveis"
  get "/planner/mobile/pagamentos", to: "web/pages/taxreturn/mobile#pagamentos"
  get "/planner/mobile/novo_pagamento_1", to: "web/pages/taxreturn/mobile#novo_pagamento_1"
  get "/planner/mobile/novo_pagamento_2", to: "web/pages/taxreturn/mobile#novo_pagamento_2"
  get "/planner/mobile/novo_pagamento_3", to: "web/pages/taxreturn/mobile#novo_pagamento_3"
  get "/planner/mobile/novo_pagamento_4", to: "web/pages/taxreturn/mobile#novo_pagamento_4"
  get "/planner/mobile/novo_pagamento_5", to: "web/pages/taxreturn/mobile#novo_pagamento_5"
  get "/planner/mobile/novo_pagamento_6", to: "web/pages/taxreturn/mobile#novo_pagamento_6"
  get "/planner/mobile/novo_pagamento_7", to: "web/pages/taxreturn/mobile#novo_pagamento_7"
  get "/planner/mobile/editar_pagamento_1", to: "web/pages/taxreturn/mobile#editar_pagamento_1"
  get "/planner/mobile/editar_pagamento_2", to: "web/pages/taxreturn/mobile#editar_pagamento_2"
  get "/planner/mobile/editar_pagamento_3", to: "web/pages/taxreturn/mobile#editar_pagamento_3"
  get "/planner/mobile/editar_pagamento_4", to: "web/pages/taxreturn/mobile#editar_pagamento_4"
  get "/planner/mobile/editar_pagamento_5", to: "web/pages/taxreturn/mobile#editar_pagamento_5"
  get "/planner/mobile/editar_pagamento_6", to: "web/pages/taxreturn/mobile#editar_pagamento_6"
  get "/planner/mobile/editar_pagamento_7", to: "web/pages/taxreturn/mobile#editar_pagamento_7"
  get "/planner/mobile/configuracoes", to: "web/pages/taxreturn/mobile#configuracoes"
  get "/planner/mobile/novo_dependente_1", to: "web/pages/taxreturn/mobile#novo_dependente_1"
  get "/planner/mobile/novo_dependente_2", to: "web/pages/taxreturn/mobile#novo_dependente_2"
  get "/planner/mobile/novo_dependente_3", to: "web/pages/taxreturn/mobile#novo_dependente_3"
  get "/planner/mobile/editar_dependente_1", to: "web/pages/taxreturn/mobile#editar_dependente_1"
  get "/planner/mobile/editar_dependente_2", to: "web/pages/taxreturn/mobile#editar_dependente_2"
  get "/planner/mobile/editar_dependente_3", to: "web/pages/taxreturn/mobile#editar_dependente_3"

  

end
 