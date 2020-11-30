class Users::Permissions::TranslateRequestToPermissions

  PATH = {
            "/atividades" => "task_boards",
            "/minhas-squads" => "squad_entities",
            "/configuracoes-atividades" => "task_settings",
            "/marketing" => "marketing",
            "/vendas" => "sales",
            "/operacoes" => "operations",
            "/conteudo" => "posts",
            "/meu-perfil" => "users",
            "/configuracoes" => "settings",
            "/geradores" => "generators",
            "/relatorios" => "reports",



            "/landings" => "landings",
            "/campanhas" => "campaigns",
            "/calculadoras" => "calculators",
            "/downloads" => "download_entities",
            "/eventos" => "events",
            "/cursos" => "course_entities",

            "/leads" => "leads",
            "/time" => "team",
            "/medicos" => "doctor",
            "/funcionalidades" => "features",
            "/assistentes" => "helper",

            "/pj-medicas" => "clinic",
            "/pj-tomadoras" => "pjtaker",

            "/recebimentos" => "medfat",
            "/configuracoes-recebimentos" => "medfat",
            "/parametrizacoes" => "guidelines",
            "/parametrizacoes-repasse" => "transfers",

            "/planner-anual" => "medreturn",
            "/livro-caixa" => "medbooking",

            "/dashboard" => "dashboard",

            "/test" => "test"
          }
  
  ACTION = {  
            'dashboard' => 'index',
            'settings' => 'index',
            'generators' => 'index',
            'marketing' => 'index',
            'sales' => 'index',
            'operations' => 'index',
            'landings' => 'index',
            'feature_value' => 'read',
            'main' => 'index',
            'dates' => 'show',
            'test' => 'index'
          }
  
end