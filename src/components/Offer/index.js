import offerImg from '../../assets/images/offer.jpg'
import Button from '../Button'

function Offer(){
  return /*html*/`
  
  <section>
  <div class="max-w-2xl mx-auto mt-16 p-5">
    <div class="ml-2">
      <h2 class="text-4xl text-textDefault mb-3">1 jogo da sua lista de desejos está em oferta!</h2>
      <span class="text-xl mb-3 text-textDefault">Maneater</span>
     
    </div>

    <img class=" mx-auto" src=${offerImg}>
    <div class=" grid grid-cols-2 ml-2 items-center">
      <p class=" text-sm text-textDefault font-bold mt-2"><span class=" uppercase">promoção especial!</span> Oferta válida até 7 de jul. 2:00pm -03</p>
      <div class=" justify-self-end mr-2 flex items-center">
        <span class=" text-sm px-2	text-textDiscount bg-bgDiscount ">-50%</span>
        <span class=" text-textDiscount bg-bgPrice text-sm  px-2 line-through">R$ 75,49</span>
        <span  class=" text-textDiscount bg-bgPrice text-sm  px-2 ">R$ 37,74</span>
      </div>
      <p class=" text-textDefault col-span-2 mt-5 text-lg">Vivencie a maior fantasia de força na pele do predador alfa dos mares: o tubarão gigante! Aterrorize os litorais. Despedace banhistas e mergulhadores, dê motivos para os humanos temerem você!</p>
    </div>
    <div class=" text-center mt-16">
      ${Button('Ver a sua lista de desejos')}
    </div>
  </div>
  </section>

  `
}
export default Offer