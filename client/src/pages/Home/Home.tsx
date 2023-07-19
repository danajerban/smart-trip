import "./Home.css"
import React from "react";

const Home = () => {

  return (

      <main role='main' className='flexHome bodyHome'>
        <div data-testid='earth' className='earth filterHome'></div>
        <div data-testid='space' className='space'></div>
      </main>

  );
}

export default Home;
