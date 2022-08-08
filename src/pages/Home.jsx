import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Catergories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
    return (
      <div>
       
       
        <Announcement/>
        <Navbar />
        <Slider/>
        <Categories />
      <Products/>
      <Newsletter/>
        <Footer/>
        
      </div>
    );
  };
  
  export default Home;