import steamFooter from '../../assets/images/steamFooter.jpg'
import valveImg from '../../assets/images/valve.jpg'
import twitterImg from '../../assets/images/twitter.png'

function Footer(){

  return /*html*/`
    <footer>
      <div class="max-w-2xl mx-auto mt-10 p-5 bg-titleWarning">
        <div class="p-5">
          <h3 class=" mt-5 text-lg">
          Preços e descontos específicos podem estar sujeitos a alterações. Verifique a página na Loja Steam para mais detalhes.</h3>
          <h3 class=" mt-8 text-lg">Você está recebendo este e-mail porque o item acima está na sua lista de desejos no Steam.</h3>
        </div>
        <div class=" grid grid-cols-2  items-center ">
          <div class=" mx-auto w-48 flex flex-col gap-10 mt-10">
            <img src=${steamFooter} alt="Logo da marca Steam">
            <img src=${valveImg} alt="Logo da marca Steam">
          </div>
          <div class=" mx-auto w-48 flex flex-col gap-10 mt-10">
            <div>
              <p>Preferências de e-mail</p>
              <p>Edite as suas Preferências de comunicação para receber e-mails importantes</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `

}

export default Footer