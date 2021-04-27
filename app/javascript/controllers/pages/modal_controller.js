import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "image", "text", "dates", "startedAtInput", "selectHour", "firstStep", "secondStep", "thirdStep", "cardTitle", "cardBody", "buttonHour"]

  connect() {
    // banco de dados com horarios disponiveis
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

    // nome do cliente que veio da pagina com o formulário
    this.clientName = "Caio"
    this.controllerName = "pages--modal"
    this.doMainHtml()
  }

  // construir grid da página
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
    // inserir img no topo da pagina
    this.doImageHtml()

    // inserir título principal da pagina
    this.doTexHtml()

    // inserir passos e card no body da pagina
    this.doDateHtml()

  }

  doImageHtml() {
    var html = `<img class="img-modal" src="/logomarca-medcapital.png" alt="MedCapital" >`

    this.imageTarget.innerHTML = html
  }

  doTexHtml() {

    var html = `<h2 class="color-text-modal"><b>Obrigado ${this.clientName}, agende aqui sua consultoria gratuita!</b></h2>`
    this.textTarget.innerHTML = html
  }

  doDateHtml() {
    var html = `<div class="col-6 d-flex flex-column">
                  <div class=" space-date">
                    <div data-target=${this.controllerName}.firstStep class="d-flex div-modal-passos">
                      <h3 class="text-hr-space modal-passos "> <span class=""><i class="chip-icon">1</i> <b> Selecionar uma data</b></h3>
                    </div>

                    <div data-target=${this.controllerName}.secondStep class="d-flex div-modal-passos">
                      <h3 class="text-hr-space modal-passos-opacity "> <span class=""><i class="chip-icon">2</i> <b> Selecionar um horário</b></h3>
                    </div>

                    <div data-target=${this.controllerName}.thirdStep class="d-flex div-modal-passos">
                      <h3 class="text-hr-space modal-passos-opacity"> <span class=""><i class="chip-icon">3</i> <b> Confirmar Agendamento</b></h3>
                    </div>
                  
                  </div>
                </div>
                
                <div class="col-6 d-flex flex-column">
                  <div data-target="${this.controllerName}.selectHour" class="space-buttons card">

                    <div data-target=${this.controllerName}.cardTitle class="row d-flex justify-content-center">
                      <h3 class="text-hr-space color-passos"><b>Escolha a melhor data para sua consultoria.</b></h3>
                    </div>
                    <div data-target=${this.controllerName}.cardBody class="row d-flex justify-content-center scrollbar">
                      <button data-target="${this.controllerName}.startedAtInput" class="button-date"><b></b>Selecione uma data</b></button>
                    </div>
                  </div>

                  <div class=" col-sm-8 d-flex ml-3 my-2" id="scheduleViaWhatsApp" style="">Não encontrou um horário ideal? <br><span><a class="a-white" target="blank" href="https://api.whatsapp.com/send?phone=5531995351912&amp;text=Olá, quero agendar uma consultoria. "><span class="ml-1" style="color:#26C485;"> Clique aqui </span> e fale diretamente com um consultor.</a></span></div>

                </div>`

    this.datesTarget.innerHTML = html

    var date = new Date()
    this.pickOnlyFuture($(this.startedAtInputTarget), "yearly", date.getFullYear())

  }

  // funcao para gerar popup calendario na pagina
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
        // funcao para guardar a data selecionada pelo cliente
        controller.changeDate();
      },
    });

    element.on('mousedown', function (e) {
      e.preventDefault();
      $(this).dblclick()
    });

  }


  changeDate(){
    // target startedAtInput guarda a data selecionada pelo cliente
    var date = this.startedAtInputTarget.value.split("/")
    this.selectedDate = this.startedAtInputTarget.value
    var day = Number(date[0])
    var month = date[1]
    var year = Number(date[2])
   
    // hash para guardar os horarios disponiveis na data selecionada
    // hours é um json com os horarios nao repetidos
    // idHours é um json com id do banco de dados e horarios disponiveis
    this.avaiableHours = { hours: [], idHours: [] }
    
    // buscar horarios disponiveis a partir da data selecionada (sem repeticao)
    this.availableDates.dates.forEach(element => {
      if (day === element.day && month === element.month && year === element.year) {
        if (!this.avaiableHours.hours.includes(element.hour)) {
          this.avaiableHours.hours.push(element.hour)
          this.avaiableHours.idHours.push({id: element.id, hour: element.hour})
        }
      }
    });

    this.doHourHtml()
  }

  doHourHtml(){
    // constroi grid de horarios e muda os passos
    if(this.startedAtInputTarget.value){
      this.firstStepTarget.classList.add("modal-passos-opacity")
      this.secondStepTarget.innerHTML = `<h3 class="text-hr-space modal-passos "> <span class=""><i class="chip-icon">2</i> <b> Selecionar um horário</b></h3>`
      this.cardTitleTarget.innerHTML = `<div class="row">
                                          <div class="col-9">
                                            <h3 class="text-hr-space margin-l color-passos"><b>Selecione um horário</b></h3>
                                          </div>
                                          <div class="col-3 text-hr-space margin-t-neg">
                                            <button data-target="${this.controllerName}.startedAtInput" class="button-change-date"><b></b>Trocar data</b></button>
                                          </div>
                                        </div>

                                          <div class="mt-4 mb-3 ">
                                            <h3><b>Você selecionou o dia ${this.selectedDate}</b></h3>
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
          bodyHtml += `<button id=${element.id} data-action="click->${this.controllerName}#selectHour" data-target="${this.controllerName}.buttonHour-${element.id}" class="button-hour text-center">${element.hour}</button>`
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
    this.secondStepTarget.classList.add("modal-passos-opacity")
    this.thirdStepTarget.innerHTML = `<h3 class="text-hr-space modal-passos"> <span class=""><i class="chip-icon">3</i> <b> Confirmar Agendamento</b></h3>`
    this.cardTitleTarget.innerHTML = `<div class="row">
                                        <div class="col-9">
                                          <h3 class="text-hr-space marginl-confirm color-passos"><b>Confirmar agendamento</b></h3>
                                        </div>
                                        <div class="col-3 text-hr-space margin-t-neg">
                                          <button data-target="${this.controllerName}.startedAtInput" class="button-change-date"><b></b>Trocar data</b></button>
                                        </div>
                                      </div>`
    this.cardBodyTarget.innerHTML = `<h3 class="text-hr-space color-passos"><b>Você escolheu ${this.selectedDate} às ${ev.target.innerText}</b></h3>
                                     <button data-action="click->${this.controllerName}#fetchData" class="button-confirm">Confirmar</button>`
    
    var date = new Date()
    this.pickOnlyFuture($(this.startedAtInputTarget), "yearly", date.getFullYear())                                     
    
    this.sendData = { hour: { hour_id: ev.target.id } }
  }
  
  // chamar fetch para o backend
  // mensagem de obrigado
  // no this.sendData o id e horario selecionada estão guardados
  fetchData() {
    this.thirdStepTarget.classList.add("modal-passos-opacity")
    this.cardTitleTarget.innerHTML = ``
    this.cardBodyTarget.innerHTML = `<h3 class="color-passos margintlr"><b>Obrigado. Sua consultoria foi agendada com sucesso. Entraremos em contato.</b></h3>
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



