import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import './ItemList.css';
const ItemList = ({ query }) => {

  const URLbase = 'https://api.mercadolibre.com/sites/MLA'  
  const [data, setData] = useState([]);  

  const getFromAPI = async () => {
    try {
        const result = await fetch(`${URLbase}/search?q=${query}`) //alt + 96
        const resultObj = await result.json();
        setData(resultObj.results);
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(() =>{

    getFromAPI();

  },[query])

  return (
    <section>

        {
            data.length > 0 ? (
                data.map( product => <Item key={product.id} product={product} /> )
            ) 
            
            : <p>Cargando productos</p>
        }

    </section>
  )
}

export default ItemList