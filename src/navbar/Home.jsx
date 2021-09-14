import React,{useState}  from 'react';
import './home.css';
import Card from './Card';
import {carddata} from './carddata';
import Footer from './Footer';
import AllProductList from './AllProductList';

 
const AllType = [...new Set(carddata.map((currElem) => currElem.type)),"all"];

const Home = (props) => {
    const [card,setCard] = useState(carddata) ;
    const [type, setType] = useState(AllType);

    const filterItem = (itemType) => {
        if(itemType ===  "all"){
          setCard(carddata);
        }
        else{
          const updatedItem = carddata.filter((currElem) => {
            return currElem.type === itemType;
        });

      setCard(updatedItem);
      }
}

    return (
    <>
      <div className="main-div">
         <div className="text-div">
            <h1>Want to Buy</h1>
            <a href="#heading"><button>Check it</button></a>
         </div>
      </div>

     <AllProductList id="product" AllType = {type} filterItem = {filterItem}/>
     
      <div className="body">
             {card.map((data) => {
             return <Card 
                 key ={data.id}
                 name={data.cName}
                 image={data.imgsrc}
                 title={data.title}
                 alt={data.alt}
                 type={data.type}
                 isMobile={props.isMobile}
               />
             })}
            </div>
      <Footer />
    </>
    )
}      

export default Home;