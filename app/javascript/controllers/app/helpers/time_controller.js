import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"]

  connect() {
  }

  doDurationFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + "hr " + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + "min " + (secs < 10 ? "0" : "");
    ret += "" + secs + "s";
    return ret;
  }

  doSimpleDurationFormat(duration, startedDate) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;
    var startedDate = new Date(startedDate)
    var timeNow = new Date()
    
    var dateDiff = parseInt((timeNow - startedDate)/1000/86400)

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      if (hrs == 1) {
        ret += "Há " + hrs + " hora atrás";
      } else if (hrs < 24) {
        ret += "Há " + hrs + " horas atrás";
      } else {
        if (dateDiff == 1) {
          ret += "Há " + dateDiff + " dia atrás";
         } else if (dateDiff < 5) {
            ret += "Há " + dateDiff + " dias atrás";
        } else {
          ret += `No dia ${startedDate.getDate()} de ${this.showFullMonth(startedDate.getMonth())}`
        }
      }
    } else if (mins == 1) {
      ret += "Há " + mins + " minuto atrás";
    } else if (mins > 1) {
      ret += "Há " + mins + " minutos atrás";
    } else if (mins < 1) {
      ret += "Há menos de 1 minuto atrás";
    }

    return ret;
  }


  showFullMonth(month) {

    var all_ptBR_months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    var new_month = all_ptBR_months[month]

    return new_month
  }

}