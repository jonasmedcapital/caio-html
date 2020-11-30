import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "result", "totalNotification", "connectionIcon"]

  connect() {
    this.setUserName()
    this.doNavbarHtml()
  }

  connectionOn() {
    this.connectionIconTarget.classList.add("md-success")
    this.connectionIconTarget.classList.remove("md-danger")
    this.connectionIconTarget.dataset.connection = true
    this.connectionIconTarget.parentElement.dataset.originalTitle = "Conectado"
  }

  connectionOff() {
    this.connectionIconTarget.classList.add("md-danger")
    this.connectionIconTarget.classList.remove("md-success")
    this.connectionIconTarget.dataset.connection = false
    this.connectionIconTarget.parentElement.dataset.originalTitle = "Sem Conexão"
  }

  tryReconnect() {
    var status = this.getControllerByIdentifier("app--helpers--strings").fromStringToBoolean(this.connectionIconTarget.dataset.connection)
    if (status) {
      console.log(this.application)
    } else {
      console.log("mas tentar reconnectar")
    }
  }

  setUserName() {
    if (this.application.current_user.account_kind == "doctor") {
      if (this.application.current_user.sex == "male") {
        this.application.userName = `Dr. ${this.application.current_user.name.split(" ")[0]}`
      } else {
        this.application.userName = `Dra. ${this.application.current_user.name.split(" ")[0]}`
      }
    } else if (this.application.current_user.account_kind == "admin" || this.application.current_user.account_kind == "team") {
      this.application.userName = currentUser.name.split(" ")[0]
    }
  }

  showNotifications() {
    this.getControllerByIdentifier("app--communications--notifications--entities").showNotifications()
  }

  updateTotalNotifications() {
    if (this.application.notifications.length > 0) {
      this.totalNotificationTarget.innerText = this.application.notifications.length
    } else {
      this.totalNotificationTarget.innerText = ``
    }
  }

  doNavbarHtml() {
    if (this.application.current_user.account_kind == "admin" || this.application.current_user.account_kind == "team") {
      var profileLink = `/a/meu-perfil/${currentUser.token}`
    } else if (this.application.current_user.account_kind == "doctor") {
      var profileLink = `/d/meu-perfil/${currentUser.token}`
    }
    var html = `<ul class="nav navbar-nav navbar-right">
              <li>
                <a class="nav-link nav-link-text a-dark pointer" style="padding:5px;" data-toggle="tooltip" data-placement="left" title="Conexão" id="appConnection" data-action="click->app--navigation--desktop--navbar#tryReconnect"><span class="material-icons" data-target="app--navigation--desktop--navbar.connectionIcon">settings_remote</span></a>
              </li>
              <li>
                <a class="notice nav-link nav-link-text a-dark pointer" style="padding:5px;" data-toggle="tooltip" data-placement="left" title="Notificações" data-action="click->app--navigation--desktop--navbar#showNotifications"><span class="material-icons">notification_important</span><span class="badge badge-danger notice-badge" data-target="app--navigation--desktop--navbar.totalNotification"></span></a>
              </li>
              <li>
                <a class="d-flex align-items-center nav-link nav-link-text a-dark pointer" data-toggle="tooltip" data-placement="top" title="Meu Perfil" href="${profileLink}">${this.application.userName}</span></a>
              </li>
              <li>
                <a class="d-flex align-items-center nav-link nav-link-text nav-link-danger a-dark" data-method="delete" href="/sair" data-toggle="tooltip" data-placement="bottom" title="Sair"><i class="material-icons">exit_to_app</i></a>
              </li>
            </ul>`

    
    this.mainTarget.insertAdjacentHTML("beforeend", html)
  }

  getControllerByIdentifier(identifier) {
    return this.application.controllers.find(controller => {
      return controller.context.identifier === identifier;
    });
  }


}
