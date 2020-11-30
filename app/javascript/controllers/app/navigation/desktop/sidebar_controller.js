import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["navdrawer"]

  connect() {
    this.getCurrentUserSidebarPermissions()
    this.application.current_user = currentUser
  }


  doSidebarHtml(permission, accountKind) {

    if (permission.can_dashboard) {
      var dashboard = `<ul class="navdrawer-nav">
                        <li class="nav-item">
                          <a class="nav-link" href="/dashboard" disabled="true"><i class="material-icons" data-toggle="tooltip" data-placement="top" title data-original-title="Dashboard">dashboard</i></a>
                        </li>
                      </ul>` 
    } else {
      var dashboard = ``
    }

    if (permission.can_tasks) {
      var tasks = `<ul class="navdrawer-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="/a/atividades/${currentUser.slug}" disabled="true"><i class="material-icons" data-toggle="tooltip" data-placement="top" title data-original-title="Atividades">format_list_numbered</i></a>
                    </li>
                  </ul>`
    } else {
      var tasks = ``
    }

    if (permission.can_marketing) {
      var marketing = `<ul class="navdrawer-nav">
                        <li class="nav-item">
                          <a class="nav-link" href="/a/marketing"><i class="material-icons" data-toggle="tooltip" data-placement="top" title data-original-title="Marketing">track_changes</i></a>
                        </li>
                      </ul>`
    } else {
      var marketing = ``
    }

    if (permission.can_sales) {
      var sales = `<ul class="navdrawer-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="/a/vendas"><i class="material-icons" data-toggle="tooltip" data-placement="top" title data-original-title="Vendas">record_voice_over</i></a>
                    </li>
                  </ul>`
    } else {
      var sales = ``
    }

    if (permission.can_operations) {
      if (accountKind == "admin" || accountKind == "team") {
        var ref = `/a/operacoes`
      } else if (accountKind == "doctor") {
        var ref = `/d/operacoes`
      }
      var operations = `<ul class="navdrawer-nav">
                          <li class="nav-item">
                            <a class="nav-link" href="${ref}"><i class="material-icons" data-toggle="tooltip" data-placement="top" title data-original-title="Operações">category</i></a>
                          </li>
                        </ul>`
    } else {
      var operations = ``
    }

    if (permission.can_marketing && permission.can_content) {
      var content = `<ul class="navdrawer-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="/a/conteudo"><img data-toggle="tooltip" data-placement="top" title data-original-title="Conteúdo" src="https://medcapital-site-main.s3-sa-east-1.amazonaws.com/images/icon-descanso-invert.png" alt="descancomedico" style="width:0.8rem;cursor:pointer;"></a>
                      </li>
                    </ul>`
    } else if (permission.can_content) {
      var content = `<ul class="navdrawer-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="/descanso-medico"><img data-toggle="tooltip" data-placement="top" title data-original-title="Conteúdo" src="https://medcapital-site-main.s3-sa-east-1.amazonaws.com/images/icon-descanso-invert.png" alt="descancomedico" style="width:0.8rem;cursor:pointer;"></a>
                      </li>
                    </ul>`
    } else {
      var content = ``
    }

    if (permission.can_profile) {
      if (accountKind == "admin" || accountKind == "team") {
        var ref = `/a/meu-perfil/${currentUser.slug}`
      } else if (accountKind == "doctor") {
        var ref = `/d/meu-perfil/${currentUser.slug}`
      }
      var profile = `<div class="navdrawer-divider"></div>
                      <ul class="navdrawer-nav">
                        <li class="nav-item">
                          <a class="nav-link" href="${ref}" disabled="true"><i class="material-icons" data-toggle="tooltip" data-placement="top" title="Meu Perfil">account_box</i></a>
                        </li>
                      </ul>
                    <div class="navdrawer-divider"></div>`
    } else {
      var profile = ``
    }

    if (permission.can_settings) {
      var settings = `<ul class="navdrawer-nav">
                        <li class="nav-item">
                          <a class="nav-link" href="/a/configuracoes" disabled="true"><i class="material-icons" data-toggle="tooltip" data-placement="top" title="Configurações">settings</i></a>
                        </li>
                      </ul>`
    } else {
      var settings = ``
    }

    if (permission.can_generators && $("#currentUserDataContainer").data("currentUser").super_admin) {
      var generators = `<ul class="navdrawer-nav">
                          <li class="nav-item">
                            <a class="nav-link" href="/a/geradores" target="_blank" disabled="true"><i class="material-icons" data-toggle="tooltip" data-placement="top" title="Geradores">file_copy</i></a>
                          </li>
                        </ul>`
    } else {
      var generators = ``
    }

    if (permission.can_develop && $("#currentUserDataContainer").data("currentUser").super_admin) {
      var develop = `<ul class="navdrawer-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="/a/dev-page" disabled="true"><i class="material-icons" data-toggle="tooltip" data-placement="top" title="Página Teste">code</i></a>
                      </li>
                    </ul>`
    } else {
      var develop = ``
    }

    if (permission.can_report && $("#currentUserDataContainer").data("currentUser").super_admin) {
      var report = `<ul class="navdrawer-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="/a/relatorios" disabled="true"><i class="material-icons" data-toggle="tooltip" data-placement="top" title="Relatórios">table_chart</i></a>
                      </li>
                    </ul>`
    } else {
      var report = ``
    }


    var html = `<div class="navdrawer-header" style="background-color:#fbfcff;height:57px;">
                  <a class="navbar-brand px-0"></a>
                </div>
                ${dashboard}
                ${tasks} 
                ${marketing}
                ${sales}
                ${operations}
                ${content}
                ${profile}
                ${settings}
                ${generators}
                ${develop}
                ${report}`

    this.navdrawerTarget.innerHTML = html
    tooltip()
  }

  getCurrentUserSidebarPermissions() {
    const data = { current_user: { current_user_id: currentUser.id }, user: { user_id: currentUser.id } }
    const token = $('meta[name=csrf-token]').attr('content');
    const url = "/users/permissions/sidebars/read"
    const init = { method: "POST", credentials: "same-origin", headers: { "X-CSRF-Token": token, 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
    var controller = this
    fetch(url, init)
      .then(response => response.json())
      .then(response => {
        var permission = response.data.cln
        var sidebarPermission = permission.data
        var accountKind = permission.account_kind
        $("#currentUserSidebarPermisisonContainer").data(permission.name, permission.data)
        controller.doSidebarHtml(sidebarPermission, accountKind)
        this.application.sidebar_permission = sidebarPermission
      })
  }
}
