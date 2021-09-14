import React from 'react'
import './home.css';
import {Link} from 'react-router-dom'


const Card = (props) => {
  
    return (
        <>
            <div className= {props.isMobile ? "is-mobile-card" : "card"}>
                   <img className="card-image" src={props.image} alt={props.alt} width="100%" height="60%" />
                
                    <div className="card-info">
                        <h4 className="card-heading"> {props.name}</h4>                    
                        <p className="card-text">{props.title}</p><br />
                      
                    </div>
                    <Link to ="/login"><button className="view-button" >Add to Cart</button></Link>
            </div>
        </>
    )
}


export default Card;
