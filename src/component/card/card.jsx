import React from 'react'
import '../dashboard/home.css';
import { Link } from 'react-router-dom'


const Card = ({ isMobile, alt, image, name, title }) => {
    return (
        <>
            <div className={isMobile ? "is-mobile-card" : "card"}>
                <img className="card-image" src={image} alt={alt} width="100%" height="60%" />
                <div className="card-info">
                    <h4 className="card-heading"> {name}</h4>
                    <p className="card-text">{title}</p><br />
                </div>
                <Link to="/login"><button className="view-button" >Add to Cart</button></Link>
            </div>
        </>
    )
}


export default Card;
