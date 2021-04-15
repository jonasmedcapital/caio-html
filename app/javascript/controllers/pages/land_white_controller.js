import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["main", "forms", "image", "imageebook", "firstcontent", "list", "formsecond", "show", "9999"]

  connect() {
    console.log("this is home stimulus")

    this.doMainHtml()
  }

  doMainHtml(){
    var html =  `<div class="row color-page"> 
                    <div class="col-7" data-target="pages--land-white.forms">
                    </div>
                    <div class="col-5" data-target="pages--land-white.image">
                    </div>
                  </div>

                  <div class="row color-page">
                    <div class="col-7" data-target="pages--land-white.imageebook">
                    </div>
                    <div class="col-5" data-target="pages--land-white.firstcontent">
                    </div>
                  </div>

                  <div data-target="pages--land-white.list" class="row d-flex justify-content-center color-page ">
                  </div>
                  
                  <div data-target="pages--land-white.formsecond" class="row d-flex justify-content-center color-page">
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
    var html = `<div class="mt-5 spacetext">
                  <div class="textwidth">
                    <h2 class="textform">Precisa abrir ou regularizar sua PJ Médica? Vamos te ajudar com isso!</h2>
                  </div>
                  <div class="textwidth">
                    <h5 class=" textform">Da abertura até a regularização completa da sua empresa. A MedCapital vai te ajudar com tudo isso, de forma ágil e prática.  Somos especializados nesses processos, cuidamos da burocracia e dos prazos para facilitar a vida financeira do médico.</h5>
                  </div>
                </div>

                <div class="d-flex spaceform">
                  <form class="form-width">
                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform" ">Nome</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="text" id="lname" name="name" placeholder="Digite seu nome">
                      </div>
                    </div>

                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform">E-mail</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="text" name="email" placeholder="Digite seu E-mail..">
                      </div>
                    </div>

                    <div class="row d-inline">
                      <div class="row">
                        <label class="textform">Celular</label>
                      </div>
                      <div class="row">
                        <input class="inputform" type="number" name="phone" placeholder="Digite seu Telefone com DDD..">
                      </div>
                    </div>

                    <div class="floating-label mb-3 floating-label-sm"><label for="hasClinicLeadForm">Precisar abrir ou regularizar uma PJ Médica?</label><select class="custom-select" id="hasClinicLeadForm" required=""><option></option><option value="true">Sim</option><option value="false">Não</option></select><div class="valid-tooltip" style="display:none;" id="hasClinicLeadFormFeedbackValid"><span id="hasClinicLeadFormMessageValid"></span></div><div class="invalid-tooltip" style="display:none;" id="hasClinicLeadFormFeedbackInvalid"><span id="hasClinicLeadFormMessageInvalid"></span></div></div>

                   <div class="floating-label mb-3 floating-label-sm"><label for="sourceLeadForm">Como chegou até a MedCapital?</label><select class="custom-select" id="sourceLeadForm" required=""><option></option><option value="google">Via Internet</option><option value="referrer">Meu amigo me indicou</option><option value="event">Participei de um evento</option></select><div class="valid-tooltip" style="display:none;" id="sourceLeadFormFeedbackValid"><span id="sourceLeadFormMessageValid"></span></div><div class="invalid-tooltip" style="display:none;" id="sourceLeadFormFeedbackInvalid"><span id="sourceLeadFormMessageInvalid"></span></div></div>

                    <div class=" d-flex">
                      <input class="checkwidth" type="checkbox" name="termos">
                      <h5 class="textform">Eu concordo com os Termos de Uso e Política de Privacidade</h5>
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

   var html =  `<div class="conteudowidth">
                  <div class="divcuston">
                    <h3 class="textform"><b>Deixa os prazos e burocracias com a gente!</b> <b class="bcolor"> #contacomaMed</b> Oferecemos serviços completos para que o médico possa atuar na sua PJ Médica, seja para o recebimento ou consultório.</h3>
                  </div>
                </div>`
                

   this.firstcontentTarget.innerHTML = html
 }

 doList(){

   var html = `<div class="row w-100 textbookspace">
                  <div class="col-3"></div>
                  <div class="col-4"> 
                    <h3 class="mt-5 cursormed textform" id=1 data-action="mouseover->pages--land-white#changeValue">Como a consultoria com a MedCapital irá me ajudar?</h3>
                    <h3 class="mt-5 cursormed textform" id=2 data-action="mouseover->pages--land-white#changeValue">Quais os serviços que estão incluidos no serviço de controle e contabilidade para pessoa jurídica médica?</h3>
                    <h3 class="mt-5 cursormed textform" id=3 data-action="mouseover->pages--land-white#changeValue">Quais são os prazos para abertura da empresa? E como empresa<h3>
                    <h3 class="mt-5 cursormed textform" id=4 data-action="mouseover->pages--land-white#changeValue">Quais são as cidades atendidas pela MedCapital?</h3>
                  </div>
                  <div class="col-4 mt-5">
                    <div class="row">
                      <div  data-target="pages--land-white.show"></div>
                    </div> 
                    
                  </div>
                  <div class="col-2"></div>
                </div>`


   this.listTarget.innerHTML = html
 }

 changeValue(ev){
   var html = ``
   console.log("testandoooooo")
   console.log(ev.target.id)
   if (ev.target.id == 1) {
     html = `<h3 class="mt-5 textform">Através de uma conversa inicial vamos entender melhor as suas necessidades em relação a abrir ou regularizar sua empresa médica, verificando, por exemplo, se será usada para Recebimento ou em um Consultório. Faremos a simulação para entender qual será o melhor regime de tributação para sua empresa e tirarmos suas dúvidas sobre esse processo.</h3>`
   } else if (ev.target.id == 2) {
     html = `<ul>
                <li class="mt-2 textform">Abertura da Empresa e toda a regularização necessária.</li>
                <li class="mt-2 textform">Emissão de Notas Fiscais e Controle de Impostos.</li>
                <li class="mt-2 textform">Cadastro e atualização do CNES (Cadastro Nacional de Estabelecimento de Saúde).</li>
                <li class="mt-2 textform">Cadastro e atualização do CRM Jurídico.</li>
                <li class="mt-2 textform">Controle de obrigações contábeis com a Receita Federal e outros órgãos Municipais, Estaduais e/ou Nacionais.</li>
                <li class="mt-2 textform">Alvarás de Localização, Funcionamento e Sanitário.</li>
                <li class="mt-2 textform">DMED (Declaração de Serviços Médicos é Saúde).</li>
                <li class="mt-2 textform">Atendimento personalizado através de Grupo de Whatsapp, nesse grupo ficam os sócios, 3 representantes da MedCapital das áreas de (Atendimento,Contabilidade e Sucesso do Cliente).</li>
                <li class="mt-2 textform">Orientação Jurídica e Tributária.</li>
                <li class="mt-2 textform">Imposto de Renda da Pessoa Jurídica.</li>
              </ul>`
   } else if (ev.target.id == 3) {
     html = `<h4 class="textform">O prazo de abertura de uma empresa varia de 3 a 6 semanas para que esteja apta a emitir Notas Fiscais. O processo total pode levar até 90 dias pelas questões burocráticas relativas aos Alvarás.<br>O inicio do processo começa com assinatura do contrato e pagamento pelo serviço de Abertura, após isso iniciamos a coleta de documentos através de formulários, faremos toda a parte burocrática para  o médico, elaborar o contrato, registrar em cartório, solicitar os Alvarás e Certificados, o médico paga esses custos em formato de reembolso num prazo de até 90 dias</h4>`
   } else if (ev.target.id == 4) {
     html = `<h5 class="textform"><b>Os serviços de abertura e regularização de empresas médicas (PJ) e médicos autônomos (PF), atualmente, já são realizados em:</b> <br>
              <b>MINAS GERAIS:</b> <br>
              Belo Horizonte, Nova Lima, Contagem, Betim, Ribeirão das Neves, Santa Luzia, Ibirité, Sabará, Uberlândia, Uberada, Juiz de Fora, Montes Claros, Governador Valadares, Ipatinga, Sete Lagoas, Divinópolis, Poços de Caldas, Patos de Minas, Pouso Alegre, Teófilo Otoni e Barbacena. <br>
              <b>SÃO PAULO:</b> <br>
              São Paulo, Campinas, Guarulhos, São Bernardo do Campo, Santo André, São José dos Campos, Osasco, Ribeirão Preto, Sorocaba, Mauá, São José do Rio Preto, Mogi das Cruzes, Diadema, Jundiaí e Piracicaba.</h5>`
   }    
   this.showTarget.innerHTML = html
 }

 doFormSecond(){
   var html = `<div class="col-6 secformcolor textbookspace">

                  <div class="mt-5">
                    <div class="d-flex justify-content-center">
                      <h3 class="textform">Acesso imediato e gratuito.Garante a sua cópia.</h3>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center">
                    <form class="form-width">
                      <div class="row d-inline">
                        <div class="row">
                          <label class="textform" ">Nome</label>
                        </div>
                        <div class="row">
                          <input class="inputform" type="text" id="lname" name="name" placeholder="Digite seu nome">
                        </div>
                      </div>

                      <div class="row d-inline">
                        <div class="row">
                          <label class="textform" ">E-mail</label>
                        </div>
                        <div class="row">
                          <input class="inputform" type="text" name="email" placeholder="Digite seu E-mail..">
                        </div>
                      </div>

                      <div class="row d-inline">
                        <div class="row">
                          <label class="textform" ">Celular</label>
                        </div>
                        <div class="row">
                          <input class="inputform" type="number" name="phone" placeholder="Digite seu Telefone com DDD..">
                        </div>
                      </div>

                      <div class="floating-label mb-3 floating-label-sm"><label for="hasClinicLeadForm">Precisar abrir ou regularizar uma PJ Médica?</label><select class="custom-select" id="hasClinicLeadForm" required=""><option></option><option value="true">Sim</option><option value="false">Não</option></select><div class="valid-tooltip" style="display:none;" id="hasClinicLeadFormFeedbackValid"><span id="hasClinicLeadFormMessageValid"></span></div><div class="invalid-tooltip" style="display:none;" id="hasClinicLeadFormFeedbackInvalid"><span id="hasClinicLeadFormMessageInvalid"></span></div></div>

                      <div class="floating-label mb-3 floating-label-sm"><label for="sourceLeadForm">Como chegou até a MedCapital?</label><select class="custom-select" id="sourceLeadForm" required=""><option></option><option value="google">Via Internet</option><option value="referrer">Meu amigo me indicou</option><option value="event">Participei de um evento</option></select><div class="valid-tooltip" style="display:none;" id="sourceLeadFormFeedbackValid"><span id="sourceLeadFormMessageValid"></span></div><div class="invalid-tooltip" style="display:none;" id="sourceLeadFormFeedbackInvalid"><span id="sourceLeadFormMessageInvalid"></span></div></div>
                      
                      <div class="page__toggle">
                        <label class="toggle">
                          <input class="toggle__input" type="checkbox" checked>
                          <span class="toggle__label">
                            <span class="toggle__text">Check Me!</span>
                          </span>
                        </label>
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




