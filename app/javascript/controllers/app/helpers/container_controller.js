import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
    this.beginMutationObserver()
  }

  beginMutationObserver() {
    var controller = this
    var mutationObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        var containerHeight = 0
        if (mutation.type == 'childList') {
          controller.containerTarget.children.forEach(element => {
            containerHeight += Number(element.clientHeight)
          })
        }
        controller.getControllerByIdentifier("app--helpers--elements").tooltip()
        controller.getControllerByIdentifier("app--helpers--elements").untooltip()
        controller.containerTarget.style.height = containerHeight + `px`
      });
    });
    
    mutationObserver.observe(this.containerTarget, {
      // attributes: true,
      // characterData: true,
      childList: true,
      subtree: true,
      // attributeOldValue: true,
      // characterDataOldValue: true
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
  

}