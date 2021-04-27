import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "title", "step", "cardTitle", "cardBody", "startedAtInput", "selectedData", "hoursBtn", "", "8888", "9999"]

  connect() {
    this.availableDates = {
      dates: [
        { id: 1, day: 29, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 2, day: 29, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 3, day: 29, month: "Abr", year: 2021, hour: "10:00", current_user_id: 2 },
        { id: 16, day: 29, month: "Abr", year: 2021, hour: "11:00", current_user_id: 2 },
        { id: 17, day: 29, month: "Abr", year: 2021, hour: "12:00", current_user_id: 2 },
        { id: 18, day: 29, month: "Abr", year: 2021, hour: "13:00", current_user_id: 2 },
        { id: 19, day: 29, month: "Abr", year: 2021, hour: "14:00", current_user_id: 2 },
        { id: 20, day: 29, month: "Abr", year: 2021, hour: "15:00", current_user_id: 2 },
        { id: 21, day: 29, month: "Abr", year: 2021, hour: "16:00", current_user_id: 2 },
        { id: 22, day: 29, month: "Abr", year: 2021, hour: "17:00", current_user_id: 2 },
        { id: 23, day: 29, month: "Abr", year: 2021, hour: "19:00", current_user_id: 2 },
        { id: 24, day: 29, month: "Abr", year: 2021, hour: "20:00", current_user_id: 2 },
        { id: 25, day: 29, month: "Abr", year: 2021, hour: "21:00", current_user_id: 2 },
        { id: 26, day: 29, month: "Abr", year: 2021, hour: "22:00", current_user_id: 2 },
        { id: 27, day: 28, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 5, day: 28, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 6, day: 28, month: "Abr", year: 2021, hour: "10:00", current_user_id: 2 },
        { id: 7, day: 28, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 8, day: 28, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 9, day: 28, month: "Abr", year: 2021, hour: "11:00", current_user_id: 2 },
        { id: 10, day: 27, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 11, day: 27, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 12, day: 27, month: "Abr", year: 2021, hour: "09:00", current_user_id: 2 },
        { id: 13, day: 27, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
        { id: 14, day: 27, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
        { id: 15, day: 27, month: "Abr", year: 2021, hour: "11:00", current_user_id: 2 },
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
                  <h2 class="text-center mobile-margin-title"><b>Obrigado ${this.clientName}, agende aqui sua consultoria gratuita!</b></h2>
                </div>
                <div data-target="${this.controllerName}.step" class="d-flex justify-content-center mobile-step-size">
                  <h3 class=""> <span class=""><i class="chip-icon">1</i> <b> Selecionar uma data</b></h3>
                </div>
                <div data-target="${this.controllerName}.cardTitle" class="">
                  <button data-target="${this.controllerName}.startedAtInput" class="mobile-button-date"><b></b>Selecione uma data</b></button>
                </div>
                <div data-target="${this.controllerName}.cardBody" class="d-flex justify-content-center">
                </div>`

    this.titleTarget.innerHTML = html
    var date = new Date()
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

    // console.log(this.avaiableHours)

    if (this.findedHour) {
      this.doHourHtml()
    } else {
      this.getControllerByIdentifier("app--helpers--snackbar").doSnackbar("danger", "Não existe horários disponíveis para essa data", 4000)
      // this.doDateHtml()
    }
  }

  doHourHtml(){
    // constroi grid de horarios e muda os passos
    if(this.startedAtInputTarget.value){
      this.stepTarget.innerHTML = ``
      this.stepTarget.innerHTML = `<h3 class=""> <span class=""><i class="chip-icon">2</i> <b> Selecione um horário</b></h3>`
      this.cardTitleTarget.innerHTML = `<div class="">
                                          <h3><b>Você selecionou o dia ${this.selectedDate}</b></h3>
                                        </div>
                                        <div class="">
                                          <div class="">
                                            <button data-target="${this.controllerName}.startedAtInput" class=""><b></b>Trocar data</b></button>
                                          </div>
                                        </div>`

      
      var bodyHtml = ``

      // colocar calendario no button trocar data
      var date = new Date()
      this.pickOnlyFuture($(this.startedAtInputTarget), "yearly", date.getFullYear())

      // verificar se existe algum horario disponivel
      if(this.avaiableHours.idHours.length == 0) {
        bodyHtml = `<span class="fa-stack fa-1x">
                      <i class="fas fa-list fa-lg"></i>
                    </span>
                    <h6><b>Não há horários disponíveis nessa data</b></h6>`

      // caso existir horarios montar grid de horarios
      } else {
        this.avaiableHours.idHours.forEach(element => {
          bodyHtml += `<button id=${element.id} data-action="click->${this.controllerName}#selectHour" data-target="${this.controllerName}.buttonHour-${element.id}" class="">${element.hour}</button>`
        });
      }
      this.cardBodyTarget.innerHTML = bodyHtml


    } else {
      this.getControllerByIdentifier("app--helpers--snackbar").doSnackbar("danger", "Selecione uma data", 4000)
    }
  }

  selectHour(ev){
    // action executada quando o cliente seleciona alguma hora
    // muda os passos, constroi botao submit e mostra detalhes da seleção do cliente
    this.stepTarget.innerHTML = ``
    this.stepTarget.innerHTML = `<h3 class=""> <span class=""><i class="chip-icon">3</i> <b>Confirmar horário</b></h3>`
    this.cardTitleTarget.innerHTML = `<h3 class=""><b>Você escolheu ${this.selectedDate} às ${ev.target.innerText}</b></h3>
                                      <div class="">
                                        <div class="">
                                          <button data-target="${this.controllerName}.startedAtInput" class=""><b></b>Trocar data</b></button>
                                        </div>
                                      </div>`
    this.cardBodyTarget.innerHTML = `<button data-action="click->${this.controllerName}#fetchData" class="">Confirmar</button>`
    
    var date = new Date()
    this.pickOnlyFuture($(this.startedAtInputTarget), "yearly", date.getFullYear())                                     
    
    this.sendData = { hour: { hour_id: ev.target.id } }
  }

  // chamar fetch para o backend
  // mensagem de obrigado
  // no this.sendData o id e horario selecionada estão guardados
  fetchData() {
    this.cardTitleTarget.innerHTML = ``
    this.cardBodyTarget.innerHTML = `<h3 class=""><b>Obrigado. Sua consultoria foi agendada com sucesso. Entraremos em contato.</b></h3>
                                      <span><i class="material-icons green-icon fa-lg">thumb_up</i>`
    
  }
}

