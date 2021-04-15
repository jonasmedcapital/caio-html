import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "image", "text", "dates", "startedAtInput", "", "", "", ""]

  connect() {
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
                      <h3 class="texthrspace modalpassos "> <span class=""><i class="chip-icon">1</i> <b> Passo: Selecionar uma data;</b></h3>
                    </div>

                    <div class="d-flex divmodalpassos">
                      <h3 class="texthrspace modalpassos "> <span class=""><i class="chip-icon">2</i> <b> Passo: Selecionar um horário;</b></h3>
                    </div>

                    <div class="d-flex divmodalpassos">
                      <h3 class="texthrspace modalpassos"> <span class=""><i class="chip-icon">3</i> <b>Passo: Confirmar Agendamento.</b></h3>
                    </div>
                  
                  </div>
                </div>
                
                <div class="col-6 d-flex flex-column">
                  <div class="spacebuttons card">

                      <div class="row d-flex justify-content-center">
                        <h3 class="texthrspace colorpassos">Escolha a melhor data para sua consultoria.</h3>
                      </div>
                     <div class="row d-flex justify-content-center mb-5">

                        <div data-target="${this.controllerName}.startedAtInput" class="button_slide slide_down"><h5 class="h5modal"><b>Selecione uma data</b></h5></div>

                    </div>
                  </div>

                  <div class=" spacebuttons col-sm-12 d-flex justify-content-center my-2" id="scheduleViaWhatsApp" style="">Não encontrou um horário ideal? <br><span><a class="a-white" target="blank" href="https://api.whatsapp.com/send?phone=5531995351912&amp;text=Olá, quero agendar uma consultoria. "><span class="ml-1" style="color:#26C485;"> Clique aqui </span> e fale diretamente com um consultor.</a></span></div>
                </div>`

    this.datesTarget.innerHTML = html

    var date = new Date()
    this.getControllerByIdentifier("app--helpers--pickdate").pickWithLimit($(this.startedAtInputTarget), "yearly", date.getFullYear())

    
  }

  getControllerByIdentifier(identifier) {
    return this.application.controllers.find(controller => {
      return controller.context.identifier === identifier;
    });
  }


}



