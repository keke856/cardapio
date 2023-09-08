import { useState,useEffect } from "react";
import "./modal.scss"

export default function modal({...props}){



const [productQtd,setproductQtd] = useState(1); 

const [total,setproductTotal] = useState(0);

const [complements,setComplements] = useState([])


const [description,setDescription] = useState([])


const [shoppingCart,setShoppingCart] = useState( localStorage.getItem('products') !== null?JSON.parse(localStorage.getItem('products')) :[])



useEffect(() => {
     setproductTotal(50.00)
}, total);



useEffect(() => {

    localStorage.setItem('products', JSON.stringify(shoppingCart));

}, [shoppingCart]);


function handleDescriptionChange(event)
{
 setDescription(event.target.value)

}


function handleCheckboxChange(event){
  const isChecked = event.target.checked;
  const dataValue = parseFloat(event.target.getAttribute('data-price'));
  const dataName = event.target.getAttribute('data-name');

  if (isChecked) {
    const plus = total + dataValue;
    setproductTotal(Math.round(plus * 100) / 100);
     setComplements([...complements,dataName])
  } else {

    const newComplements = complements.filter(item => item !== dataName);
    setComplements(newComplements);
    const subtract = total - dataValue;
    subtract.toFixed(2)
    setproductTotal(Math.round(subtract * 100) / 100);
  }
}



const incremet= ()=>{
  
    setproductQtd(productQtd + 1);
    
}

const decrement= ()=>{
  if(productQtd > 1){
   setproductQtd(productQtd -1);
  }
}


function addShoppingCart()
{

  const cart={
    "id":9999,
    "Product": props.TitleModal,
    "qtd":productQtd,
    "price": total * productQtd,
    "description":description,
    "complements":complements
   }
  

   setShoppingCart([...shoppingCart,cart])

}



if(!props.modalOpen == true){
return ("");

}else{

 return(
    
     
       <div className="container-modal" id="modal-products">
       
           <div className="modal-body">
                <div className="modal-header">
                       <h5>{props.title}</h5>
                       <svg onClick={()=>props.setModal(false)} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M7 17L16.8995 7.10051" stroke="#a1a1a1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#a1a1a1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>

                    <div className="modal-content">
                        <div className="modal-img-product">
                           <img src="https://i0.wp.com/tastychurrosburguer.com.br/wp-content/uploads/2020/11/Costela-britanica-1024x682.jpeg" alt=""  title=""/>
                          </div>

                          <div className="modal-options-products">

                                   <h1 className="modal-title"> Adicionais  </h1>
                                  { props.modalData.map((item)=>(

                                      <div className="modal-option">  
                                      <div>    
                                          <input  onChange={handleCheckboxChange}  data-price={item.price} data-name={item.name} type="checkbox" id="option-01"></input>
                                          <label for="option-01">{item.name}</label>
                                        </div>
                                        <div className="modal-option-price">
                                            <span>R$ {item.price}</span>
                                          </div>
                                      </div>

                                  ))}
                                     

                             </div>
              
                      
                            <div className="modal-note">
                                <h1 className="modal-title"> Observações  </h1>
                           
                                   <textarea id="modal-note-textarea" onChange={handleDescriptionChange}  placeholder="Insira sua observações aqui."></textarea>
                              </div>
                       
                            <div className="modal-footer">
                                  <div className="modal-qtd">
                                      <span id="modal-qtd-plus" onClick={incremet}>+</span>
                                        <input type="text" value={productQtd} disabled></input>
                                      <span id="modal-qtd-plus" onClick={decrement}>-</span>
                                    </div>

                                  <div className="modal-price-total" onClick={addShoppingCart}>
                                      <span>R$ {Math.round(total * productQtd)}</span>
                                    </div>

                              </div>


                    </div>

             </div>
       
       </div>




 );
}
}