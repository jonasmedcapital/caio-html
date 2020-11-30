import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"]

  connect() {
    this.application.current_user_id = this.element.dataset.currentUserId
    this.application.current_user = currentUser
    this.application.token = $('meta[name=csrf-token]').attr('content')
  }

  getUserName(user) {

    if (user.account_kind == "admin" || user.account_kind == "team") {
      var userName = `${user.name.split(" ").shift()} ${user.name.split(" ").pop()}, da MedCapital,`
    } else if (user.account_kind == "doctor") {
      if (user.sex == "male") {
        var userName = `Dr. ${user.name.split(" ").shift()}`
      } else if (user.sex == "female") {
        var userName = `Dra. ${user.name.split(" ").shift()}`
      }
    }

    return userName

  }

  getControllerByIdentifier(identifier) {
    return this.application.controllers.find(controller => {
      return controller.context.identifier === identifier;
    });
  }

}
