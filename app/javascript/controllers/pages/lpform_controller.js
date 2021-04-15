import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "image", "formsContent", "forms", "question", "sucessclient", "7777", "8888", "9999"]

  connect() {
    console.log("this is home stimulus")
    this.doMainHtml()
  }

  doMainHtml() {
    var html = `<div class="row justify-content-center formcollor">
                  <div class="mt-3 " data-target="pages--forms.image"></div>
                </div>
                <div class="row formcollor">
                  <div class="col-1 ml-3"></div>
                  <div class="col-5" data-target="pages--forms.formsContent"></div>
                  <div class="col-5 formbottonmarg" data-target="pages--forms.forms"></div>
                </div>
                <div class="spacepage">
                  <div data-target="pages--forms.question"></div>
                </div>
                <div class="spacepage">
                  <div data-target="pages--forms.sucessclient"></div>
                </div>`

    var controller = this

    new Promise(function (resolve) {
      resolve(controller.mainTarget.insertAdjacentHTML("beforeend", html))
    }).then(() => {
      controller.doImageHtml()
      controller.doFormsRowHtml()
      controller.doQuestionContentHtml()
      controller.doSucessClientsHtml()
    })
  }

  doImageHtml() {
    var html = `<img class="mcapimg" src="/mecapital@2x.png" alt="MedCapital" >`

    this.imageTarget.innerHTML = html
  }

  doFormsRowHtml() {
    this.doFormsContentHtml()
    this.doFormsHtml()

  }

  doFormsContentHtml() {
    var html = `<div class=" margdivform col-11 ">

                  <div class="margtextform d-flex text-center">
                    <h1 class="textcolorform ">Conversa</h1>
                    <h1 class="textcolorform ml-2" style="color: #26C485">GRATUITA </h1>
                  </div>
                  <div class="margtextform d-flex text-center">
                    <h1 class="textcolorform">com especialista</h1>
                  </div>

                    <div class="margtextform text-justify mt-3">
                      <h3 class="textcolorform ">Agende uma conversa e descubra as vantagens que o médico pode conseguir no imposto de renda.</h3>
                    </div>

                    <div class="margtextform mt-3">
                      <h5 class="textcolorform text-justify text-left">É a sua oportunidade de ter uma consultoria exclusiva, antes de contratar o serviço com os melhores especialistas que vão ajudar você a tirar sua dúvidas, entender melhor suas necessidades e indicar as soluções mais estratégicas.</h5>
                    </div>

                </div>`

    this.formsContentTarget.innerHTML = html
  }

  doFormsHtml() {
    var html = `<div class="mt-5">
                  <div>
                    <h2 class="textcolorform ">Preencha os seus dados </h2>
                  </div>
                  <div>
                    <h5 class="textcolorform ">Entraremos em contato para agendar sua conversa gratuita</h5>
                  </div>
                </div>

                <div class="d-flex ">
                  <form class="form-width">
                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform" ">Nome</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="text" id="lname" name="name" placeholder="Your Name..">
                      </div>
                    </div>
                    
                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform" ">E-mail</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="text" name="email" placeholder="Your E-mail..">
                      </div>
                    </div>

                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform" ">Celular</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="number" name="phone" placeholder="Your Phone Number..">
                      </div>
                    </div>

                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform" ">CRM</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="number"  name="CRM" placeholder="Your CRM..">
                      </div>
                    </div>

                    <h5 class="textcolorform">Como declarou seu IR anteriormente</h5>
                      <label class="containercheck">Nunca declarei
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                      </label>
                      <label class="containercheck">Eu mesmo declaro
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                      </label>
                      <label class="containercheck">Tenho/Tive um contador
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                      </label>
                    
                    <button class="submitform"> Agendar uma Conversa</button>
                    

                  </form>
                </div>`

    this.formsTarget.innerHTML = html
  }

  doQuestionContentHtml() {

    var html = `<div class="row spacepage">
                  <div class="col-6 d-flex-inline justify-content-center">
                    <div class="d-flex justify-content-center">
                      <span class="material-icons iconform">check_circle_outline</span>
                    </div>
                    <div class="d-flex mt-3 justify-content-center">
                      <div class="col-8">
                        <h5 class="text-justify">loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsuml oren ipsum loren ipsum loren ipsum loren ipsum ipsum loren ipsum loren ipsum loren ipsum loren </h5>
                      </div>
                    </div> 
                  </div>

                  <div class="col-6 d-flex-inline justify-content-center">
                    <div class="d-flex justify-content-center">
                      <span class="material-icons iconform">check_circle_outline</span>
                    </div>
                    <div class="d-flex mt-3 justify-content-center">
                      <div class="col-8">
                        <h5 class="text-justify">loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsuml oren ipsum loren ipsum loren ipsum loren ipsum ipsum loren ipsum loren ipsum loren ipsum loren </h5>
                      </div>
                    </div> 
                  </div> 
                </div>

                <div class="row mt-5">
                  <div class="col-6 d-flex-inline justify-content-center">
                    <div class="d-flex justify-content-center">
                      <span class="material-icons iconform">check_circle_outline</span>
                    </div>
                    <div class="d-flex mt-3 justify-content-center">
                      <div class="col-8">
                        <h5 class="text-justify">loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsuml oren ipsum loren ipsum loren ipsum loren ipsum ipsum loren ipsum loren ipsum loren ipsum loren </h5>
                      </div>
                    </div> 
                  </div>

                  <div class="col-6 d-flex-inline justify-content-center">
                    <div class="d-flex justify-content-center">
                      <span class="material-icons iconform">check_circle_outline</span>
                    </div>
                    <div class="d-flex mt-3 justify-content-center">
                      <div class="col-8">
                        <h5 class="text-justify">loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsuml oren ipsum loren ipsum loren ipsum loren ipsum ipsum loren ipsum loren ipsum loren ipsum loren </h5>
                      </div>
                    </div> 
                  </div>`

    this.questionTarget.innerHTML = html
  }

  doSucessClientsHtml() {
    var html = `<div class="row spacepage d-flex justify-content-center">
                  <div>
                    <h2 class="colorsucess"> Veja o que estão falando sobre a MedCapital</h2>
                  </div> 
                </div>

                <div class="row spacepage d-flex justify-content-center ">
                  
                  <div class="d-flex justify-content-center col-4">
                    <div>
                      <img src="/img_avatar.png" alt="Avatar" class="imgform">
                      <h3 class="mt-2">Dr. Gerson Marques</h3>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center col-4">
                    <div>
                      <img src="/img_avatar.png" alt="Avatar" class="imgform">
                      <h3 class="mt-2">Dr. Gerson Marques</h3>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center col-4">
                    <div>
                      <img src="/img_avatar.png" alt="Avatar" class="imgform">
                      <h3 class="mt-2">Dr. Gerson Marques</h3>
                      <div>
                        
                      </div>
                    </div>
                  </div>

                </div>
                
                <div class="row  d-flex justify-content-around ">    
                  <div class="col-3 mt-3">
                        <h5 class="text-justify">loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsuml oren ipsum loren ipsum loren ipsum loren ipsum ipsum loren ipsum loren ipsum loren ipsum loren </h5>
                  </div>

                  <div class="col-3 mt-3">
                        <h5 class="text-justify">loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsuml oren ipsum loren ipsum loren ipsum loren ipsum ipsum loren ipsum loren ipsum loren ipsum loren </h5>
                  </div>

                  <div class="col-3 mt-3">
                        <h5 class="text-justify">loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsuml oren ipsum loren ipsum loren ipsum loren ipsum ipsum loren ipsum loren ipsum loren ipsum loren </h5>
                  </div>
                </div>`

    this.sucessclientTarget.innerHTML = html
  }

}