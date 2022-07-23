import React from 'react';
import CardDetails from '../card';
import './home.css';

const Home = (props) => {
  return (
    <>
      <div className="main-div">
        <div className="text-div">
          <h1>Want to Buy</h1>
          <a href="#heading"><button>Check it</button></a>
        </div>
      </div>
      <CardDetails isMobile={props.isMobile}/>
    </>
  )
}

export default Home;