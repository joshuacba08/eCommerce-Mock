import React, { useEffect, useState } from "react";
import { RotatingLines } from  'react-loader-spinner'
import { arrayProducts } from "../../assets/data/products";
import Product from "../Product/Product";

import "./ProductList.css";
const ProductList = () => {

    const [products, setProducts] = useState([]);

  const getProducts = new Promise( (resolve, reject) => { //async mock
    setTimeout(() => {
        if (true) {
            resolve(arrayProducts);
        } else {
            reject('Error 501');
        }
    },4000)
  })

  useEffect(() => {

    getProducts
        .then( response => setProducts(response) )
        .catch( error =>console.error(error) )


  }, []) //[] array de dependencias
  //Si está vacío el useEffect se ejecuta solo una vez cuando el componente se monta
  

  return (
    <div>


        {products.length > 0 ?   
        
            (products.map((item) =>{
                return <Product key={item.id} product={item} />
            }))
        : 
        
        
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
        
        }



      {/* {arrayComponents}

      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      /> */}
    </div>
  );
};

export default ProductList;
