import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "image", "text", "dates", "startedAtInput", "selectHour", "firstStep", "secondStep", "thirdStep", "cardTitle", "cardBody", "buttonHour"]

  connect() {
    this.availableDates = { dates: [
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
    ]}

    this.clientName = "Caio"
    this.controllerName = "pages--modal"
    this.doMainHtml()
  }

  doMainHtml() {
    var html = `<div class="">
                  <div class="row d-flex justify-content-center" data-target="${this.controllerName}.image">
                  </div>
                  <div class="row d-flex d-flex justify-content-center" data-target="${this.controllerName}.text">
                  </div>
                  <div class="row" data-target="${this.controllerName}.dates">
                  </div>
                </div>`


    this.mainTarget.innerHTML = html
    this.doImageHtml()
    this.doTexHtml()
    this.doDateHtml()

  }

  doImageHtml() {
    var html = `<img class="imgmodal" src="/logomarca-medcapital.png" alt="MedCapital" >`

    this.imageTarget.innerHTML = html
  }

  doTexHtml() {

    var html = `<h2 class="colortextmodal"><b>Obrigado ${this.clientName}, agende aqui sua consultoria gratuita!</b></h2>`

    this.textTarget.innerHTML = html
  }

  doDateHtml() {
    var html = `<div class="col-6 d-flex flex-column">
                  <div class=" spacedate">
                    <div data-target=${this.controllerName}.firstStep class="d-flex divmodalpassos">
                      <h3 class="texthrspace modalpassos "> <span class=""><i class="chip-icon">1</i> <b> Selecionar uma data</b></h3>
                    </div>

                    <div data-target=${this.controllerName}.secondStep class="d-flex divmodalpassos">
                      <h3 class="texthrspace modalpassos-opacity "> <span class=""><i class="chip-icon">2</i> <b> Selecionar um horário</b></h3>
                    </div>

                    <div data-target=${this.controllerName}.thirdStep class="d-flex divmodalpassos">
                      <h3 class="texthrspace modalpassos-opacity"> <span class=""><i class="chip-icon">3</i> <b> Confirmar Agendamento</b></h3>
                    </div>
                  
                  </div>
                </div>
                
                <div class="col-6 d-flex flex-column">
                  <div data-target="${this.controllerName}.selectHour" class="spacebuttons card">

                      <div data-target=${this.controllerName}.cardTitle class="row d-flex justify-content-center">
                        <h3 class="texthrspace colorpassos"><b>Escolha a melhor data para sua consultoria.</b></h3>
                      </div>
                    <div data-target=${this.controllerName}.cardBody class="row d-flex justify-content-center scrollbar">
                      <button data-target="${this.controllerName}.startedAtInput" data-action="change->${this.controllerName}#changeDate" class="button-date"><b></b>Selecione uma data</b></button>
                    </div>
                  </div>

                  <div class=" col-sm-8 d-flex justify-content-center my-2" id="scheduleViaWhatsApp" style="">Não encontrou um horário ideal? <br><span><a class="a-white" target="blank" href="https://api.whatsapp.com/send?phone=5531995351912&amp;text=Olá, quero agendar uma consultoria. "><span class="ml-1" style="color:#26C485;"> Clique aqui </span> e fale diretamente com um consultor.</a></span></div>

                </div>`

    this.datesTarget.innerHTML = html

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

  changeDate(){
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
          this.avaiableHours.idHours.push({id: element.id, hour: element.hour})
          this.findedHour = true
        }
      }
    });

    if(this.findedHour){
      this.doHourHtml()
    } else {
      this.getControllerByIdentifier("app--helpers--snackbar").doSnackbar("danger", "Não existe horários disponíveis para essa data", 4000)
      // this.doDateHtml()
    }
  }

  doHourHtml(){
    if(this.startedAtInputTarget.value){
      this.firstStepTarget.classList.add("modalpassos-opacity")
      this.secondStepTarget.innerHTML = `<h3 class="texthrspace modalpassos "> <span class=""><i class="chip-icon">2</i> <b> Selecionar um horário</b></h3>`
      this.cardTitleTarget.innerHTML = `<div class="row">
                                          <div class="col-9">
                                            <h3 class="texthrspace marginl colorpassos"><b>Selecione um horário</b></h3>
                                          </div>
                                          <div class="col-3 texthrspace margintneg">
                                            <button data-action="click->${this.controllerName}#reloadSelectData" class="button-change-date"><b></b>Trocar data</b></button>
                                          </div>
                                        </div>`
      
      var bodyHtml = ``

      this.avaiableHours.idHours.forEach(element => {
        bodyHtml += `<button id=${element.id} data-action="click->${this.controllerName}#selectHour" data-target="${this.controllerName}.buttonHour-${element.id}" class="button-hour text-center">${element.hour}</button>`
      });
      // this.cardBodyTarget.classList.add("flex-column")
      this.cardBodyTarget.innerHTML = bodyHtml


    } else {
      this.getControllerByIdentifier("app--helpers--snackbar").doSnackbar("danger", "Selecione uma data", 4000)
    }
  }

  reloadSelectData(){
    this.findedHour = false
    this.doDateHtml()
  }

  selectHour(ev){
    this.secondStepTarget.classList.add("modalpassos-opacity")
    this.thirdStepTarget.innerHTML = `<h3 class="texthrspace modalpassos"> <span class=""><i class="chip-icon">3</i> <b> Confirmar Agendamento</b></h3>`
    this.cardTitleTarget.innerHTML = `<div class="row">
                                        <div class="col-9">
                                          <h3 class="texthrspace marginl-confirm colorpassos"><b>Confirmar agendamento</b></h3>
                                        </div>
                                        <div class="col-3 texthrspace margintneg">
                                          <button data-action="click->${this.controllerName}#reloadSelectData" class="button-change-date"><b></b>Trocar data</b></button>
                                        </div>
                                      </div>`
    this.cardBodyTarget.innerHTML = `<h3 class="texthrspace colorpassos"><b>Você escolheu ${this.selectedDate} às ${ev.target.innerText}</b></h3>
                                     <button data-target="${this.controllerName}.startedAtInput" data-action="click->${this.controllerName}#sendData" class="button-confirm">Confirmar</button>`
    console.log(ev.target)
    this.send_data = { current_user: { current_user_id: this.application.current_user_id}, hour: { hour_id: ev.target.id} }
  }
  
  sendData(){
    // chamar fetch para o backend
    this.thirdStepTarget.classList.add("modalpassos-opacity")
    this.cardTitleTarget.innerHTML = ``
    this.cardBodyTarget.innerHTML = `<h3 class="colorpassos margintlr"><b>Obrigado. Sua consultoria foi agendada com sucesso. Entraremos em contato.</b></h3>
                                      <span><i class="material-icons green-icon fa-lg">thumb_up</i>`
    
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



