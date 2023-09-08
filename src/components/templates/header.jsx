import React from 'react'
import "./style.scss";
import logo from "../../assets/logo.png"

export default function header({categories}) {
  // console.log(categories)
  return (
       <header>
               <div className='menu-top'>
                        <p>Opções</p>

                        <p>Pesquisa</p>
                 </div>
             
               <div className='banner'>
                    <div className='logo'>
                         <img src={logo} alt={logo} title={logo}/>
                     </div>

                     <div className='company-information'>
                          <h1 className='company-information__item'>ORIGINAL TAPIOCA & AÇAI</h1>
                           <p className='company-information__item'> Avenida Maria Luiza Americano, 1001, São Paulo, SP</p>
                           <button className='company-information__item' >Aberto</button>
                           <p className='company-information__item'>45-55min ● Mínimo R$10,00 ● Ver Mais</p>
                       </div>

                </div>

                  <div className='menu-category'>
                       <nav>
                            <ul>
                               {
                                 categories.map( itens=>(
                                   <li>{itens.category}</li>
                                 ))
                               }
                            </ul>
                         </nav>
                    </div>
           
         </header> 
      
  )
}
