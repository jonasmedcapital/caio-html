import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
  }

  processingCsv(response, fileName) {

    var rows = response.data.cln
    // var csvContent = "data:text/csv;charset=utf-8;%EF%BB%BF,"
    var csvContent = ``
    var row = ``

    rows.forEach(function (rowArray) {
      row = rowArray.join(";");
      csvContent += row + "\r\n";
    });
    var universalBOM = "\uFEFF"
    // var encodedUri = encodeURI(csvContent);
    var encodedUri = encodeURIComponent(universalBOM + csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodedUri);
    link.setAttribute("download", fileName + ".txt");
    document.body.appendChild(link);

    link.click();

    link.remove();

  }

  


}