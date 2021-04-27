import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "title", "startedAtInput", "", "", "", "", "8888", "9999"]

  connect() {
    this.availableDates = {
      dates: [
        { id: 1, day: 22, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 2, day: 22, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 3, day: 22, month: "Abr", year: 2021, hour: "10:00", current_user_id: 2 },
        { id: 16, day: 22, month: "Abr", year: 2021, hour: "11:00", current_user_id: 2 },
        { id: 17, day: 22, month: "Abr", year: 2021, hour: "12:00", current_user_id: 2 },
        { id: 18, day: 22, month: "Abr", year: 2021, hour: "13:00", current_user_id: 2 },
        { id: 19, day: 22, month: "Abr", year: 2021, hour: "14:00", current_user_id: 2 },
        { id: 20, day: 22, month: "Abr", year: 2021, hour: "15:00", current_user_id: 2 },
        { id: 21, day: 22, month: "Abr", year: 2021, hour: "16:00", current_user_id: 2 },
        { id: 22, day: 22, month: "Abr", year: 2021, hour: "17:00", current_user_id: 2 },
        { id: 23, day: 22, month: "Abr", year: 2021, hour: "19:00", current_user_id: 2 },
        { id: 24, day: 22, month: "Abr", year: 2021, hour: "20:00", current_user_id: 2 },
        { id: 25, day: 22, month: "Abr", year: 2021, hour: "21:00", current_user_id: 2 },
        { id: 26, day: 22, month: "Abr", year: 2021, hour: "22:00", current_user_id: 2 },
        { id: 27, day: 23, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 5, day: 23, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 6, day: 23, month: "Abr", year: 2021, hour: "10:00", current_user_id: 2 },
        { id: 7, day: 24, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 8, day: 24, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 9, day: 24, month: "Abr", year: 2021, hour: "11:00", current_user_id: 2 },
        { id: 10, day: 25, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 11, day: 25, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 12, day: 25, month: "Abr", year: 2021, hour: "09:00", current_user_id: 2 },
        { id: 13, day: 26, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 14, day: 26, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 15, day: 26, month: "Abr", year: 2021, hour: "11:00", current_user_id: 2 },
      ]
    }

    this.clientName = "Caio"
    this.controllerName = "pages--modal-mobile"
    this.doMainHtml()
  }

  doMainHtml() {
    var html = `<div data-target="${this.controllerName}.title">
                </div>`


    this.mainTarget.innerHTML = html
    this.doTitleHtml()
  }

  doTitleHtml() {
    var html = `<div>
                  <h2 class="text-center margin-title-mobile"><b>Obrigado ${this.clientName}, agende aqui sua consultoria gratuita!</b></h2>
                </div>
                <div class="d-flex justify-content-center passos-size">
                  <h3 class=" "> <span class=""><i class="chip-icon">1</i> <b> Selecionar uma data</b></h3>
                </div>
                <div class="d-flex justify-content-center">
                  <button data-target="${this.controllerName}.startedAtInput" class="button-date-mobile "><b></b>Selecione uma data</b></button>
                </div>`

    this.titleTarget.innerHTML = html

    this.pickOnlyFuture($(this.startedAtInputTarget), "yearly", date.getFullYear())
  }

  pickOnlyFuture(element, kind, year, month) {

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1

    if (kind == "monthly") {
      if (currentMonth > month && currentYear == year) {
        var maxDate = new Date(year, month, 0)
      } else {
        var maxDate = false
      }
      var minDate = 1
    } else if (kind == "yearly") {
      if (currentYear > year) {
        var maxDate = new Date(year, 12, 0)
      } else {
        var maxDate = false
      }
      // var minDate = new Date(year, 11, currentDate.getDate())
      var minDate = new Date()
    } else {
      var maxDate = false
      // var minDate = new Date(year, 11, currentDate.getDate())
      var minDate = new Date()
    }

    var controller = this

    element.pickdate({
      today: 'Hoje',
      ok: 'Selecionar',
      cancel: 'Fechar',
      closeOnCancel: true,
      closeOnSelect: true,
      container: 'body',
      containerHidden: 'body',
      firstDay: 0,
      format: 'dd/mmm/yyyy',
      formatSubmit: 'yyyy-mm-dd',
      hiddenPrefix: 'pickdate-input',
      labelMonthNext: 'Próximo Mês',
      labelMonthPrev: 'Mês Anterior',
      labelMonthSelect: 'Escolha um mês do menu',
      labelYearSelect: 'Escolha um ano do menu',
      monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      weekdaysFull: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      showMonthsFull: true,
      showMonthsShort: true,
      showWeekdaysFull: true,
      showWeekdaysShort: true,
      selectMonths: true,
      selectYears: true,
      max: maxDate,
      min: minDate,
      onClose: function (e) {
        controller.changeDate();
      },
    });

    element.on('mousedown', function (e) {
      e.preventDefault();
      $(this).dblclick()
    });

  }

  changeDate() {
    var date = this.startedAtInputTarget.value.split("/")
    this.selectedDate = this.startedAtInputTarget.value
    var day = Number(date[0])
    var month = date[1]
    var year = Number(date[2])

    this.avaiableHours = { hours: [], idHours: [] }

    this.availableDates.dates.forEach(element => {
      if (day === element.day && month === element.month && year === element.year) {
        if (!this.avaiableHours.hours.includes(element.hour)) {
          this.avaiableHours.hours.push(element.hour)
          this.avaiableHours.idHours.push({ id: element.id, hour: element.hour })
          this.findedHour = true
        }
      }
    });

    if (this.findedHour) {
      this.doHourHtml()
    } else {
      this.getControllerByIdentifier("app--helpers--snackbar").doSnackbar("danger", "Não existe horários disponíveis para essa data", 4000)
      // this.doDateHtml()
    }
  }
}
