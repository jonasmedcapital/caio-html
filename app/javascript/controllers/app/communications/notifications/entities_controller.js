import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "notificationRow", "3333", "4444", "5555", "6666", "7777", "8888", "9999"]

  connect() {
    this.application.notifications = []
    this.getNotifications()
    this.mode = "show"
    this.notifications = {}
    this.notifications.domains = []

    if (this.application.current_user.account_kind == "doctor") {
      this.getAccountProduct()
    }
  }

  seenNotification(ev) {
    var id = ev.currentTarget.dataset.id

    var data = {
      notification: { id: ev.currentTarget.dataset.id, seen: true },
      current_user: { current_user_id: this.application.current_user.id }
    }

    this.requestSave(data)
  }

  requestSave(data) {
    const token = $('meta[name=csrf-token]').attr('content');
    var url = "/app/communications/notifications/entities/update"
    var method = "PUT"
    const init = { method: method, credentials: "same-origin", headers: { "X-CSRF-Token": token, 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
    var controller = this
    fetch(url, init)
      .then(response => response.json())
      .then(response => {
        if (response.save) {
          var notification = response.data.cln
          controller.notifications[controller.application.domain.type].forEach(element => {
            if (element.id == notification.id) {
              controller.notifications[controller.application.domain.type].splice(controller.notifications[controller.application.domain.type].indexOf(element), 1)
              controller.application.notifications.splice(controller.application.notifications.indexOf(element), 1)
            }
          })

          controller.getControllerByIdentifier("app--navigation--desktop--navbar").updateTotalNotifications()
          controller.doDomainNotification()
        } else {
          // controller.nameTarget(`saveBtn-${data.date.id}`).classList.remove("d-none")
        }
        controller.getControllerByIdentifier("app--helpers--snackbar").doSnackbar(response.type, response.message, 2000)
      })
  }

  showNotifications(ev) {
    if (this.mode == "show") {
      this.doNotifications()
    } else if (this.mode == "hide") {
      this.hideNotifications()
    }
  }

  hideNotifications() {
    this.mainTarget.innerHTML = ``
    this.mainTarget.classList.remove("show")
    this.mode = "show"
  }

  doDomainNotification() {
    this.mainTarget.innerHTML = ``
    this.mode = "hide"

    var domainNotificationHTML = ``
    var d = new Date()
    var dateMilliseconds = parseInt(d.getTime() / 1000)
    
    this.notifications[this.application.domain.type].forEach(element => {
      if (element.domain_id == this.application.domain.id) {
        var createdAt = this.getControllerByIdentifier("app--helpers--time").doSimpleDurationFormat(dateMilliseconds - element.created_at_time, element.created_at)

        domainNotificationHTML += `<div class="row snackbar-outline-domain my-2 py-2 px-1 pointer" data-target="app--communications--notifications--entities.notificationRow" data-action="click->app--communications--notifications--entities#seenNotification" data-id="${element.id}">
                                    <div class="col-12 d-flex align-items-center px-0">
                                      <span class="text-left f-065">${element.action}</span>
                                    </div>
                                    <div class="col-12 d-flex align-items-center px-0">
                                      <span class="text-left f-05">${createdAt}</span>
                                    </div>
                                  </div>`
      }
    });
    // <span aria-hidden="true">&times;</span>
    var messageHtml = `<div class="row">
                        <div class="col-10 d-flex align-items-center px-0">
                          <span class="text-center f-065">Minhas Notificações</span>
                        </div>
                        <div class="col-2 d-flex align-items-center px-0">
                          <button type="button" class="close ml-auto f-065" data-dismiss="alert" data-action="click->app--communications--notifications--entities#hideNotifications" aria-label="Close">
                            <span class="text-left f-065">Fechar</span>
                          </button>
                        </div>
                      </div>
                      ${domainNotificationHTML}
                      `
    this.mainTarget.classList.add("show")
    this.mainTarget.insertAdjacentHTML("beforeend", messageHtml)
    this.mainTarget.style.height = ($(window).height() * 0.75) + "px"
  }

  doGeneralNotification() {
    this.mode = "hide"
    var domainNotificationHTML = ``

    if (this.notifications.domains.length > 0) {
      this.notifications.domains.forEach(element => {
        var domain = element
        
        if (this.notifications[element].length == 1) {
          var domainCount = `${this.notifications[element].length} nova Notificação`
        } else if (this.notifications[element].length == 0) {
          var domainCount = `Nenhuma nova Notificação`
        } else {
          var domainCount = `${this.notifications[element].length} novas Notificações`
        }

        domainNotificationHTML += `<div class="row snackbar-outline-dark my-4" data-target="app--communications--notifications--entities.notificationRow">
                                      <div class="col-4 d-flex align-items-center px-0">
                                        <span class="text-left f-05">${domain}</span>
                                      </div>
                                      <div class="col-7 d-flex align-items-center px-0">
                                        <span class="text-left f-05">${domainCount}</span>
                                      </div>
                                      <div class="col-1 d-flex align-items-center px-0">
                                        <button data-domain="${domain}" data-action="click->app--communications--notifications--entities#goToDomain" type="button" class="btn btn-sm btn-table p-0 f-05"><span class="material-icons md-sm md-dark">launch</span></button>
                                      </div>
                                    </div>`
      });
    } else {
      domainNotificationHTML += `<div class="row snackbar-outline-dark my-2" data-target="app--communications--notifications--entities.notificationRow">
                                      <div class="col-2 d-flex align-items-center px-0">
                                        <span class="fa-stack fa-1x">
                                          <i class="fas fa-list fa-stack-1x"></i>
                                        </span>
                                      </div>
                                      <div class="col-10 d-flex align-items-center px-0">
                                        <span class="text-left f-05">Você não possui notificações não lidas</span>
                                      </div>
                                    </div>`
    }

    var messageHtml = `<div class="row">
                        <div class="col-10 d-flex align-items-center px-0">
                          <span class="text-center f-065">Minhas Notificações</span>
                        </div>
                        <div class="col-2 d-flex align-items-center px-0">
                          <button type="button" class="close ml-auto f-065" data-dismiss="alert" data-action="click->app--communications--notifications--entities#hideNotifications" aria-label="Close">
                            <span class="text-left f-065">Fechar</span>
                          </button>
                        </div>
                      </div>
                      ${domainNotificationHTML}
                      `
    this.mainTarget.classList.add("show")
    this.mainTarget.insertAdjacentHTML("beforeend", messageHtml)
  }

  doNotifications() {
    if (this.notifications.domains.includes(this.application.domain_type)) {
      this.doDomainNotification()
    } else {
      this.doGeneralNotification()
    }
  }

  getNotifications() {
    var data = { notification: { user_id: this.application.current_user.id, seen: false }, current_user: { current_user_id: this.application.current_user.id } }
    const token = $('meta[name=csrf-token]').attr('content');
    const url = "/app/communications/notifications/entities/list"
    const init = { method: "POST", credentials: "same-origin", headers: { "X-CSRF-Token": token, 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
    var controller = this
    fetch(url, init)
      .then(response => response.json())
      .then(response => {
        if (response.process) {
          controller.application.notifications = response.data.cln
          controller.prepareNotifications()
          controller.getControllerByIdentifier("app--communications--notifications--broadcast").getRoom()
        }
      })
      .catch(error => {
        console.log(error)
        controller.getControllerByIdentifier("app--helpers--snackbar").doSnackbar("danger", controller.getControllerByIdentifier("app--shared--messages").generalError(), 3000)
      })
  }

  getAccountProduct() {
    var data = { current_user: { current_user_id: this.application.current_user.id } }
    const token = $('meta[name=csrf-token]').attr('content');
    const url = "/operations/accounts/products/read"
    const init = { method: "POST", credentials: "same-origin", headers: { "X-CSRF-Token": token, 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
    var controller = this
    fetch(url, init)
      .then(response => response.json())
      .then(response => {
        if (response.process) {
          controller.products = response.data.cln
        } else {
          processingSnackbar(response.type, response.message, device)
        }
      })
      .catch(error => {
        console.log(error)
        controller.getControllerByIdentifier("app--helpers--snackbar").doSnackbar("danger", controller.getControllerByIdentifier("app--shared--messages").generalError(), 3000)
      })
  }

  prepareNotifications() {
    this.getControllerByIdentifier("app--navigation--desktop--navbar").totalNotificationTarget.innerText = this.application.notifications.length

    this.notifications.domains = []
    this.application.notifications.forEach(element => {
      if (this.notifications.domains.includes(element.domain_pretty) == false) {
        this.notifications.domains[this.notifications.domains.length] = element.domain_pretty
        this.notifications[element.domain_pretty] = []
      }

      this.notifications[element.domain_pretty][this.notifications[element.domain_pretty].length] = element
    });
  }

  goToDomain(ev) {
    var domain = ev.currentTarget.dataset.domain
    if (this.application.current_user.account_kind == "doctor") {  
      window.open(`/d/${this.domainRouteMapper(domain)}/${this.domainTokenMapper(domain)}`, `_self`)
    } else if (this.application.current_user.account_kind == "admin" || this.application.current_user.account_kind == "team") {
      window.open(`/a/${this.domainRouteMapper(domain)}`, `_self`)
    }
    
  }

  domainRouteMapper(domain) {
    var router2 = {
                    "dashboard": "Dashboard",
                    "planner-anual": "Planner"
                 }

    var router = {
                    "Dashboard": "dashboard",
                    "Planner": "planner-anual",
                    "Livro-Caixa": "livro-caixa"
                    
                  }

    return router[domain]
  }

  domainTokenMapper(domain) {
    var router = {
      "Recebimentos": this.products.receivement_token,
      "Planner": this.products.tax_return_token,
      "Livro-Caixa": this.products.booking_token
    }

    return router[domain]
  }

  getControllerByIdentifier(identifier) {
    return this.application.controllers.find(controller => {
      return controller.context.identifier === identifier;
    });
  }

  nameTarget(target) {
    return this.targets.find(target)
  }

  layout() {
    var targets = ["mainCard"]
    var identifier = ""
    // this.getControllerByIdentifier("app--helpers--layout").resizeMainCard(targets, identifier)
  }

  refreshSaveBtn() {
    var controller = this
    this.refreshTimer = setInterval(function () {
      var len = 0
      controller.validGroupTargets.forEach(element => {
        if (this.fromStringToBoolean(element.dataset.valid) == false) {
          len += 1
        }
      });
      if (len == 0) {
        controller.saveBtnTarget.disabled = false
      } else {
        controller.saveBtnTarget.disabled = true
      }
    }, 200);
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }

  // new Promise(function (resolve) {
  //   resolve()
  // }).then(() => {
  // }) 

}
