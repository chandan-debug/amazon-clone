import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header"

function Home() {
  return (
  <>
  <Header/>
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)"
            price={19999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61QRgOgBx0L._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="SG Kashmir Willow Cricket Bat with Full Cover"
            price={1899}
            rating={4}
            image="https://m.media-amazon.com/images/I/617TzIRni7L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Noise Buds Smart Truly Wireless in Ear Earbuds with 18H Playtime,10mm Driver, Full Touch Control, Hyper Sync, and BT v5.0 (Pearl White)"
            price={1099}
            rating={4}
            image="https://m.media-amazon.com/images/I/41NM+K6d4sL._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;