import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <img className='home__img' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>

       <div className='home__row'>
            <Product 
                id ='1'
                price={12}
                title = 'Product 1'
                rating = {5}
                image = "https://m.sila.by/img/catalog2015/img3/tovar37609_2.jpg"
            />
            <Product 
                id ='2'
                price={11}
                title = 'HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A), white'
                rating = {3}
                image = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61UdeL7aO-L._AC_SL1500_.jpg"
            />
        </div>


        <div className='home__row'>
            <Product 
                id ='3'
                price={120}
                title = 'Apple Pencil (2nd Generation), White'
                rating = {2}
                image = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/21SPDoiRuGL._AC_SL1000_.jpg"
            />
            <Product 
                id ='4'
                price={800}
                title = 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)'
                rating = {5}
                image = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71rXSVqET9L._AC_SL1257_.jpg"
            />
            <Product 
                id ='5'
                price={520}
                title = 'Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls'
                rating = {5}
                image = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71wrIZujPIL._AC_SL1500_.jpg"
            />
        </div>
          <div className='home__row'> 
            <Product 
                  id ='6'
                  price={120}
                  title = 'Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for Instant Ink | 3YM57AN'
                  rating = {1}
                  image = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71Llge105IL._AC_SL1500_.jpg"
              />
          </div>
    </div>
    
    


  )
}

export default Home