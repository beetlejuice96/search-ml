import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../component/CardComponet";
import InfoBarComponent from "../component/InfoBarComponent";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = (params) => {
    const {busqueda}= useParams();
    const {products,addItem,fetchData,setProducts,carrito,productsFetch} = useContext(EcommerceContext);
    useEffect(() => {
        fetchData(busqueda);
        return () => {
            console.log("se esta por morir el componente");
        }
    }, [])

    const handleKeyUp = (e) => {
        const productsFilter = productsFetch.filter(product =>{
          if(product.title.toUpperCase().match(e.target.value.toUpperCase())){
            return true;
          }
          return false;
        })
        setProducts(productsFilter);
    }
  return (
    <div className="container">
      <div className="row">
          <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp}/>
          {products.map((item,index)=>{
              return (
                <CardComponent key={index} title={item.title} img={item.thumbnail} addItem ={addItem}/>
              )
          })}
      </div>
    </div>
  );
};

export default ProductsContainer;
