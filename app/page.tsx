import { RiWhatsappFill } from 'react-icons/ri';

import Image from 'next/image'
import ImgLogo from './logo.webp'

export default function Home() {
  return (
    <main className="text-sm sm:text-base flex min-h-screen flex-col items-center justify-center p-24 bg-hero-pattener bg-cover bg-top m-auto">
      <div className="bg-white/60 shadow-custom backdrop-blur shadow-lg border rounded-3xl text-black flex flex-col justify-center text-center p-9 items-center">
        <Image 
          src={ImgLogo} 
          alt='Logo da escola técnica, letra i com um circulo em volta nas cores amarelas e vermelhas' 
          height={60}
        />
        <h1 className="text-yellow-600 font-bold uppercase">
          Aviso Império Treinamento!
        </h1>
        <p>Estamos passando por manutenção no sites.</p>

        <div className='mt-4 text-blue-700 '>
          <h2>Informações para contato</h2>
          <address className="text-xs not-italic">
          Av. Orisvaldo Salviano, 154 – Mal Cozinhado<br/>
          Horizonte – Ceará<br/>
          
            <div className='flex flex-col sm:flex-row'>
            Telefones :  
              <a 
                href="tel:+5585992284097" 
                className='hover:text-red-900 transition-colors'>
                  (85) 9 9228-4097
              </a> 
              <span className='hidden sm:inline sm:mx-1'>
                /
              </span>  
              <a 
                href="tel:+5585991844406"
                className='hover:text-red-900 transition-colors'>
                  9 9184-4406
              </a>
            </div>
          E-mail : <a 
                    href="mailto:atendimento@imperiotreinamentos.com"
                    className='text-yellow-600 hover:text-red-900 transition-colors'>
                      atendimento@imperiotreinamentos.com
                   </a>
                   <br/>
          CNPJ – 27.079.931 / 0001- 83
          </address>
        </div>
      </div>
      <div className='bg-green-700  p-4 rounded-full hover:scale-105 hover:bg-green-800 transition-all absolute bottom-4 right-4 shadow-custom-whatsapp'>
        <a href="https://wa.me/5585992284097?Text=Olá, gostaria de informações sobre os cursos oferecidos.">
          <RiWhatsappFill size={40}/>
        </a>
      </div>
    </main>
  )
}
