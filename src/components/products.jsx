

export default function products({products,modal,setModal,setModalData,setTitleModal}){


function ModalData(complements,title){
 
    setModalData(complements)
    setTitleModal(title)
    setModal(true);
}




    return(
      <>
            <div className="list-category"> 
                  
                  {

                     products.map(product=>(

                                <div className="product" onClick={()=>ModalData(product.complements,product.name)}>
                                <div className="prduct__images">  
                                    <img src="https://files.menudino.com/cardapios/40259/157.jpg "></img>
                                </div>

                                    <div className="prduct__content"> 
                                        <h3>{product.name}</h3> 
                                        <p>
                                            {product.description}
                                        </p>
                                        <p className='product__price'>R$<span>{product.price}</span></p>

                                    </div>
                                </div>

                           
                     ))
                     
                  }
               
                  </div>

      </>

   
  );
}