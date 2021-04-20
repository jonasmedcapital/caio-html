import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "image", "text", "dates", "startedAtInput", "selecthour", "", "", ""]

  connect() {
    this.availableDates = { dates: [
      { id: 1, day: 22, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
      { id: 2, day: 22, month: "Abr", year: 2021, hour: "09:00", current_user_id: 1 },
      { id: 3, day: 22, month: "Abr", year: 2021, hour: "09:00", current_user_id: 2 },
      { id: 4, day: 23, month: "Abr", year: 2021, hour: "08:00", current_user_id: 1 },
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
    this.controllerName = "pages--modal"
    console.log("this is home stimulus")
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

    var html = `<h2 class="colortextmodal"><b>Obrigado Caio, agende aqui sua consultoria gratuita!</b></h2>`

    this.textTarget.innerHTML = html
  }

  doDateHtml() {
    var html = `<div class="col-6 d-flex flex-column">
                  <div class=" spacedate">
                    <div class="d-flex divmodalpassos">
                      <h3 class="texthrspace modalpassos "> <span class=""><i class="chip-icon">1</i> <b> Selecionar uma data</b></h3>
                    </div>

                    <div class="d-flex divmodalpassos">
                      <h3 class="texthrspace modalpassos "> <span class=""><i class="chip-icon">2</i> <b> Selecionar um horário</b></h3>
                    </div>

                    <div class="d-flex divmodalpassos">
                      <h3 class="texthrspace modalpassos"> <span class=""><i class="chip-icon">3</i> <b> Confirmar Agendamento</b></h3>
                    </div>
                  
                  </div>
                </div>
                
                <div class="col-6 d-flex flex-column">
                  <div data-target="${this.controllerName}.selecthour" class="spacebuttons card">

                      <div class="row d-flex justify-content-center">
                        <h3 class="texthrspace colorpassos"><b>Escolha a melhor data para sua consultoria.</b></h3>
                      </div>
                     <div class="row d-flex justify-content-center mb-5">


                      <button data-target="${this.controllerName}.startedAtInput" data-action="change->${this.controllerName}#changeDate" class="buttonfigma">Selecione uma data</button>

                    </div>
                  </div>

                  <div class=" spacebuttons col-sm-12 d-flex justify-content-center my-2" id="scheduleViaWhatsApp" style="">Não encontrou um horário ideal? <br><span><a class="a-white" target="blank" href="https://api.whatsapp.com/send?phone=5531995351912&amp;text=Olá, quero agendar uma consultoria. "><span class="ml-1" style="color:#26C485;"> Clique aqui </span> e fale diretamente com um consultor.</a></span></div>

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
    var day = Number(date[0])
    var month = date[1]
    var year = Number(date[2])
   
    this.avaiableHours = { hours: [], idHours: [] }
    
    this.availableDates.dates.forEach(element => {
      
      if (day === element.day && month === element.month && year === element.year) {
        console.log("achei")
        if (!this.avaiableHours.hours.includes(element.hour)) {
          this.avaiableHours.hours.push(element.hour)
          this.avaiableHours.idHours.push({id: element.id, hour: element.hour})
        }
      } else {
        console.log("Não existe horas para essa data")
      }
    });

    this.doHourHtml()
  }

  doHourHtml(){
    this.selecthourTarget.innerHTML = ` <div class="spacebuttons card">
                                        </div>`
  }
  
  // saveTest(){
  //   var weeklyDate = new Date(this.getControllerByIdentifier("app--helpers--date").transformFullDate(this.startedAtInputTarget.value))
  //   console.log(weeklyDate)
  // }

  getControllerByIdentifier(identifier) {
    return this.application.controllers.find(controller => {
      return controller.context.identifier === identifier;
    });
  }

}



