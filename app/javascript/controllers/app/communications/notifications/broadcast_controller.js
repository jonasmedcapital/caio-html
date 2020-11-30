import { Controller } from "stimulus"
// import createChannel from "cables/cable";

export default class extends Controller {
  static targets = ["main", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"]

  connect() {
    this.application.notification_socket = new WebSocket(this.mainTarget.dataset.webSocketUrl)
  }

  broadcastChannel() {
    let controller = this;
    this.notificationChannel = createChannel({ channel: 'Users::NotificationChannel', id: this.room.id }, {
      connected() {
        controller.listen()
        controller.getControllerByIdentifier("app--navigation--desktop--navbar").connectionOn()
      },
      received(data) {
        controller.application.notifications[controller.application.notifications.length] = data

        if (controller.getControllerByIdentifier("app--communications--notifications--entities") && controller.getControllerByIdentifier("app--communications--notifications--entities").hasMainTarget) {
          controller.getControllerByIdentifier("app--communications--notifications--entities").prepareNotifications()
        }
      },
      disconnected() {
        controller.getControllerByIdentifier("app--navigation--desktop--navbar").connectionOff()
      }
    });
  }

  getRoom() {
    var data = { notification: { user_id: this.application.current_user.id, user_name: this.application.current_user.name }, current_user: { current_user_id: this.application.current_user.id } }
    const token = $('meta[name=csrf-token]').attr('content');
    const url = "/app/communications/notifications/entities/get_room"
    const init = { method: "POST", credentials: "same-origin", headers: { "X-CSRF-Token": token, 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
    var controller = this
    fetch(url, init)
      .then(response => response.json())
      .then(response => {
        if (response.process) {
          controller.application.rooms[controller.application.rooms.length] = controller.identifier
          controller.room = response.data.cln
          controller.broadcastChannel()
        } else {
          controller.getControllerByIdentifier("app--helpers--snackbar").doSnackbar(response.type, response.message, 3000)
        }
      })
      .catch(error => {
        console.log(error)
        controller.getControllerByIdentifier("app--helpers--snackbar").doSnackbar("danger", controller.getControllerByIdentifier("app--shared--messages").generalError(), 3000)
      })
  }

  listen() {
    if (this.notificationChannel) {
      this.notificationChannel.perform('follow', { id: this.room.id })
    }
  }

  getControllerByIdentifier(identifier) {
    return this.application.controllers.find(controller => {
      return controller.context.identifier === identifier;
    });
  }

  nameTarget(target) {
    return this.targets.find(target)

    // new Promise(function (resolve) {
    //   resolve()
    // }).then(() => {
    // }) 
  }

}
