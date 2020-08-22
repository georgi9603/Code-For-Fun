import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                alt=""
            />

            <div className="home__body">
                <Product
                    title="Iphone 10X"
                    price={999.99}
                    imgURL="https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg"
                    rating={5}
                />
                <Product
                    title="Iphone 10X"
                    price={999.99}
                    imgURL="https://media.ao.com/en-GB/Productimages/Images/rvLarge/kmx754rd_rd_kenwood_mixer_01a_l.jpg"
                    rating={3}
                />
                <Product
                    title="Iphone 10X"
                    price={999.99}
                    imgURL="https://media1.popsugar-assets.com/files/thumbor/UX4cN8mJugPtvExgeHl3HjaYWyg/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/08/038/n/1922153/4f12d0af5e166c0da83fa6.34429903_/i/best-skincare-products-2020.jpg"
                    rating={4}
                />
                <Product
                    title="Iphone 10X"
                    price={999.99}
                    imgURL="https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SL1500_.jpg"
                    rating={5}
                />
            </div>

        </div>
    )
}

export default Home
