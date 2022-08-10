import React from 'react';
import './Item.css';
const Item = ({ product }) => {
  return (
    <article className="item">
        <div className="item__img">
            <img src={product.thumbnail} alt="" />
        </div>
        <div className="item__info">
            <h3>${product.price}</h3>
            <span></span>
            <p></p>
        </div>
    </article>
  )
}

export default Item