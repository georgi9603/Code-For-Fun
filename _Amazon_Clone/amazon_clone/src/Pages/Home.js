import React, { useState, useEffect } from 'react';
import Product from '../Components/Product';
import { initialState } from '../StateManager/initialState/initialState';
import { useStateValue } from '../Components/StateProvider';

import './Home.css';

function Home() {
    const [{ products }] = useStateValue(initialState.products)

    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                alt=""
            />

            <div className="home__row">
                {products?.map(product => {
                    return <Product
                        key={product.title}
                        title={product.title}
                        price={product.price}
                        imgURL={product.picURL}
                        rating={product.rating}
                    />
                })}
                {/* <Product
                    key={11}
                    id={1}
                    title="Smartphone"
                    price={999.99}
                    imgURL="https://images.unsplash.com/photo-1578653883821-89a75dcbf391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
                    rating={5}
                />
                <Product
                    key={22}
                    id={2}
                    title="Multy mixer"
                    price={259.99}
                    imgURL="https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
                    rating={3}
                /> */}
            </div>
            <div className="home__row">
                <Product
                    key={33}
                    id={2}
                    title="Fashion sneakers"
                    price={149}
                    imgURL="https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    rating={3}
                />
                <Product
                    key={44}
                    id={3}
                    title="Vintage camera"
                    price={60}
                    imgURL="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    rating={4}
                />
                <Product
                    key={55}
                    id={4}
                    title="Headphones"
                    price={90}
                    imgURL="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    rating={3}
                />
            </div>
            <div className="home__row">
                <Product
                    key={66}
                    id={2}
                    title="Smart TV"
                    price={666}
                    imgURL="data:image/jpeg;base64,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"
                    rating={3}
                />
            </div>
        </div>
    )
}

export default Home
