import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Warning from "./components/Warning";

document.querySelector('#app').innerHTML = /*html*/`
  <div class="mx-auto max-w-5xl h-screen">
    ${Warning()}
    ${Offer()}
    ${Footer()}
  </div>
`

