import React from 'react';
import '../dashboard/home.css'

const AllProductList = ({ AllType, filterItem }) => {

    return (
        <>
            <div className="allProduct">
                <h1 id="heading" className="product-heading">Our Products</h1>
                <div className="product-button">
                    {AllType.map((thisType) => {
                        return <button className="product-specific-button" onClick={() => filterItem(thisType)}>{thisType}</button>
                    })}
                </div>
            </div>
        </>
    )
}

export default AllProductList;
