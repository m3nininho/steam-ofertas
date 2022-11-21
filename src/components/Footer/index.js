import steamFooter from '../../assets/images/steamFooter.jpg'
import valveImg from '../../assets/images/valve.jpg'
import twitterImg from '../../assets/images/twitter.png'

function Footer(){

  return /*html*/`
    <footer >
      <div class="max-w-3xl mx-auto mt-10 p-5 bg-titleWarning">
        <div class="p-5">
          <h3 class=" mt-5 text-lg">
          Preços e descontos específicos podem estar sujeitos a alterações. Verifique a página na Loja Steam para mais detalhes.</h3>
          <h3 class=" mt-8 text-lg">Você está recebendo este e-mail porque o item acima está na sua lista de desejos no Steam.</h3>
        </div>
        <div class=" grid grid-cols-2  items-center  ">
          <div class=" mx-auto  flex flex-col gap-36 mt-10">
            <img class=" w-60" src=${steamFooter} alt="Logo da marca Steam">
            <img class=" w-60"  src=${valveImg} alt="Logo da marca Steam">
          </div>
          <div class=" mx-auto w-80 flex flex-col gap-10 mt-10">
            <div >
              <p class="text-sm font-bold ">Preferências de e-mail</p>
              <p class= "text-sm mt-5 mb-5">Edite as suas Preferências de comunicação para receber e-mails importantes</p>
              <div>
                <a class=" text-sm font-medium  underline " href="https://store.steampowered.com/account/emailoptout?token=04850dcd56f0d60c41144f4e35b5875d104b5e514623180e6643b9410afcc86efd5f7816ae6c9a626e85b1d7be874ee4">Cancelar inscrição |</a>
                <a class=" text-sm font-medium  underline " href="https://store.steampowered.com/account/emailoptout?token=04850dcd56f0d60c41144f4e35b5875d104b5e514623180e6643b9410afcc86efd5f7816ae6c9a626e85b1d7be874ee4">Atualizar preferências</a>
              </div>
            </div>
            <div>
              <p class="text-sm font-bold "> © Valve Corporation</p>
              <p class= "text-sm mb-5 font-bold">PO Box 1688 Bellevue, WA 98009 EUA </p>
              <p class="text-sm">Todos os direitos reservados. Todas as marcas registradas são propriedade dos seus respectivos donos nos EUA e em outros países. </p>
            <div class=" flex mt-5 gap-5 items-center">
                <img class="w-10" src=${twitterImg} class="Logo do Twitter">
                <p>Siga-nos no Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `

}

export default Footer