import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["nav", "main", "breadcrumbName", "4444", "5555", "6666", "7777", "8888", "9999"]

  connect() {
    this.getBreadcrumb()
  }

  getBreadcrumb() {
    const data = { path: { path: this.mainTarget.dataset.url } }
    const token = $('meta[name=csrf-token]').attr('content');
    const url = "/general/breadcrumbs/translate"
    const init = { method: "POST", credentials: "same-origin", headers: { "X-CSRF-Token": token, 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
    var controller = this
    fetch(url, init)
      .then(response => response.json())
      .then(response => {
        if (response.process) {
          var breadcrumbData = response.data
          controller.doBreadcrumb(breadcrumbData)
        }
      })
  }

  doBreadcrumb(breadcrumbData) {
    var html = ``

    breadcrumbData.paths.forEach(path => {
      html += `<li class="breadcrumb-item f-065"><a href="${path[1]}">${path[0]}</a></li>`
    });

    html += `<li class="breadcrumb-item f-065 active" aria-current="page" id="breadcrumbName" data-target="app--navigation--desktop--breadcrumb.breadcrumbName">${breadcrumbData.name}</li>`

    this.navTarget.innerHTML = html
    if (breadcrumbData && breadcrumbData.controller == false && (breadcrumbData.name == "" || breadcrumbData.name == undefined)) {
      $('#breadcrumbName').html(breadcrumbNameValue);
    }
  }

}
