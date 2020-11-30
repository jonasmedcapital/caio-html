import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"]

  connect() {
  }

  resizeMainCard(targets, identifier) {
    var controller = this.getControllerByIdentifier(identifier)
    targets.forEach(target => {
      if (controller.nameTarget(target)) {
        controller.nameTarget(target).style.height = ($(window).height() * 0.5) + "px"
      }
    });
  }

  getControllerByIdentifier(identifier) {
    return this.application.controllers.find(controller => {
      return controller.context.identifier === identifier;
    });
  }

  nameTarget(target) {
    return this.targets.find(target)
  }

  // new Promise(function (resolve) {
  //   resolve()
  // }).then(() => {
  // }) 

}
