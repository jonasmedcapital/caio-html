import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "forms", "image", "imageebook", "firstcontent", "list", "formsecond", "8888", "9999"]

  connect() {
    console.log("this is home stimulus")

    this.doMainHtml()
  }

  doMainHtml(){
    var html =  `<div class="row color-page-blue"> 
                    <div class="col-7" data-target="pages--land-blue.forms">
                    </div>
                    <div class="col-5" data-target="pages--land-blue.image">
                    </div>
                  </div>

                  <div class="row color-page-blue">
                    <div class="col-7" data-target="pages--land-blue.imageebook">
                    </div>
                    <div class="col-5" data-target="pages--land-blue.firstcontent">
                    </div>
                  </div>

                  <div data-target="pages--land-blue.list" class="row d-flex justify-content-center color-page-blue ">
                  </div>
                  
                  <div data-target="pages--land-blue.formsecond" class="row d-flex justify-content-center color-page-blue">
                  </div>`
    
    
    this.mainTarget.innerHTML = html
    console.log(this.formsTarget)
    this.doFormRowHtml()
    this.doContentRowHtml()
    this.doList()
    this.doFormSecond()
    
  }

  doFormRowHtml(){
    this.doFormsHtml()
    this.doImageHtml()    
  }

  doFormsHtml(){
    var html = `<div class="mt-5 spacetext ">
                  <div class="textwidth">
                    <h2 class=" textform-blue">Passo a passo para construir eventos online</h2>
                  </div>
                  <div class="textwidth">
                    <h4 class=" textform-blue">Um guia rápido para potencializar a maneira como você atrai, engaja e monetiza sua audiência virtual.</h4>
                  </div>
                </div>

                <div class="d-flex spaceform ">
                  <form class="form-width">
                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform-blue" ">Nome</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="text" id="lname" name="name" placeholder="Digite seu nome">
                      </div>
                    </div>

                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform-blue" ">E-mail</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="text" name="email" placeholder="Digite seu E-mail..">
                      </div>
                    </div>

                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform-blue" ">Celular</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="number" name="phone" placeholder="Digite seu Telefone com DDD..">
                      </div>
                    </div>

                    <div class="d-flex flex-row-reverse">
                    <button class="submitform"> Agendar uma Conversa</button>
                    </div>

                  </form>
                </div>`

    this.formsTarget.innerHTML = html
  }

  doImageHtml(){
    var html = `<img class="imgform" src="/reading.svg" alt="reading">`

    this.imageTarget.innerHTML = html
  }

  doContentRowHtml() {
    this.doImageEbook()
    this.doFirstContent()
  }

  doImageEbook(){
    var html = `<div class="spaceimg text-center"><img class="imgbook " src="/readbook.svg" alt="readbook"></div>`

    this.imageebookTarget.innerHTML = html
  }
 doFirstContent(){

   var html =  `<div class="textbookspace">
                  <div class="divcuston">
                    <h4 class="textform-blue">As regras do jogo mudaram novamente</h4>
                  </div>
                  <div class="divcuston">
                    <h5 class="textform-blue">Eventos online estão mudando as regras do jogo no mundo todo e podem mudar a realidade da sua empresa também. Seja para captação de leades, lançar um novo produto, engajar sua audiência, realizar conferências ou eventos corporativos. <b class="changetext ">As várias modalidades de eventos online vão continuar crescendo em 2021 e você vai precisar estar preparado para conseguir explorar todo o potencial que elas possibilitam.</b></h5>
                  </div>
                </div>`
                

   this.firstcontentTarget.innerHTML = html
 }

 doList(){

   var html = `<div class="textbookspace">

                  <div class="h4space">
                    <h4 class="textform-blue">O que você irá aprender nesse e-book</h4>
                  </div>

                <div>
                  <ul class="mt-1 listlanding">
                    <li class="lispace-blue">As principais vantagens dos eventos online;</li>
                    <li class="lispace-blue">Como planejar um evento online do início ao fim;</li>
                    <li class="lispace-blue">Principais formas de divulgação;</li>
                    <li class="lispace-blue">O que fazer no pós-evento.</li>
                  </ul>
                </div>
                  
                </div>`

   this.listTarget.innerHTML = html
 }

 doFormSecond(){
   var html = `<div class="col-6 secformcolor-blue textbookspace">

                  <div class="mt-5">
                    <div class="d-flex justify-content-center">
                      <h3 class=" textform-blue-blue-input">Acesso imediato e gratuito.Garante a sua cópia.</h3>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center">
                    <form class="form-width">
                      <div class="row d-inline">
                        <div class="row">
                          <label class="textform-blue-blue-input" ">Nome</label>
                        </div>
                        <div class="row">
                          <input class="inputform" type="text" id="lname" name="name" placeholder="Digite seu nome">
                        </div>
                      </div>

                      <div class="row d-inline">
                        <div class="row">
                          <label class="textform-blue-blue-input" ">E-mail</label>
                        </div>
                        <div class="row">
                          <input class="inputform" type="text" name="email" placeholder="Digite seu E-mail..">
                        </div>
                      </div>

                      <div class="row d-inline">
                        <div class="row">
                          <label class="textform-blue-blue-input" ">Celular</label>
                        </div>
                        <div class="row">
                          <input class="inputform" type="number" name="phone" placeholder="Digite seu Telefone com DDD..">
                        </div>
                      </div>

                      <div class="d-flex justify-content-center">
                      <button class="submitform"> Agendar uma Conversa</button>
                      </div>

                    </form>
                  </div>
                </div>`
   this.formsecondTarget.innerHTML = html
 }

}




