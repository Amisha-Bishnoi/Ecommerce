import React from 'react';
import './home.css'

const AllProductList = (props) => {
  
    return (
        <>
            <div className="allProduct">
         <h1 id="heading" className="product-heading">Our Products</h1>
         <div className="product-button"> 
         {props.AllType.map((thisType) => {
             return <button className="product-specific-button" onClick={() => props.filterItem(thisType)}>{thisType}</button>
         })}
          
          </div>
      </div>
        </>
    )
}

export default AllProductList;
