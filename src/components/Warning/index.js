import logo from '../../assets/images/logo.png'
import promotionImg from '../../assets/images/promotion.jpg'
import Button from '../Button'

function Warning(){

  return /*html*/`
  
  <section>
  <div class="max-w-2xl mx-auto p-5">
    <img class=" block w-20 mt-16" src=${logo} alt="Logo da marca Steam">
      <div class=" mx-auto">
        <h1 class="text-4xl mt-10 text-titleWarning">Olá, fulano.</h1>
        
        <h2 class=" text-4xl text-textDefault w-128 mt-10 uppercase font-bold">a promoção de férias do steam já começou</h2>

        <p class=" text-xl text-textDefault mt-5">1 jogo da sua lista de desejos e outros milhares estão em promoção até 7 de jul. 2:00pm -03.</p>
      </div>
      <img class=" mt-5" src=${promotionImg} alt="Imagem que descreve a promoção de férias da steam, denominada de STEAM 3000">
      <div class=" text-center mt-16">
        ${Button('Explorar a promoção')}
      </div>
  </div>
  </section>
  `

}
export default Warning