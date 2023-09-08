import { useState,useEffect } from "react";
import Products from './products';
import './category.scss';
import Modal from "./modal"

export default function category({categories})
{

     const [modal,setModal] = useState(false);
     const [modalData, setModalData] = useState();
    const  [TitleModal, setTitleModal] = useState();

  
  return(

       <>
            <br></br>

            {
                categories.map( (itens,index)=>(
                    
                             
           <div key={index} className="category" >
                <div className="HeaderCategory">
                    <h2>{itens.category}</h2>
                    <svg width="20px" height="20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#a3a3a3" stroke="#a3a3a3"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#707070"></path></g></svg>
                </div>
               
                  <Products products={itens.products} modal={modal} setTitleModal={setTitleModal} setModalData={setModalData} setModal={setModal}/>

               </div>
                
          ))
          }

              
             <Modal modalOpen={modal} title={TitleModal}  TitleModal={TitleModal} modalData={modalData} setModal={setModal}/>
               

                      
          </>


  )


}