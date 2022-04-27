import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
/**
* create page home
*
* @return html - page home
*/
const Home = () => {  
  
  return (
    <div className="container">
      <Header/>
      <div className='background'>
        <div className="container">
          <Form/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;