import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Banner from './components/Banner/Banner'
import AOS from "aos";
import "aos/dist/aos.css"
import Subscribe from './components/Subscribe/Subscribe'

import TopProducts from './components/TopProducts/TopProducts';
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

const App = () => {
  const [orderPopup,setOrderPopup]=React.useState(false);
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  };
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-out-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
<div>
  <Navbar handleOrderPopup={handleOrderPopup}/>
  <Hero handleOrderPopup={handleOrderPopup}/>
  <Products/>
  <TopProducts handleOrderPopup={handleOrderPopup}/>
  <Banner/>
  <Subscribe/>
  <Footer/>
<Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
</div>
  )
}

export default App
