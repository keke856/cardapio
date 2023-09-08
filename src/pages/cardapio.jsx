import Header from "../components/templates/header"
import Category from "../components/category"
import DataProducts from "../../products.json";

export default function cardapio()
{
    return(
        <>
           <Header categories={DataProducts}/>

           <Category  categories={DataProducts}/>
        </>
    );

}