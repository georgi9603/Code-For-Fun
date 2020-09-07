import React, { useState, useEffect } from 'react';
import Product from '../Components/Product';
import Loader from '../Components/Loader';
import { initialState } from '../StateManager/initialState/initialState';
import { useStateValue } from '../Components/StateProvider';

import './Home.css';

function Home() {
    const [{ products }] = useStateValue(initialState.products);
    const [thirdRowProduct, setThirdRowProduct] = useState(undefined);

    useEffect(() => {
        setThirdRowProduct(products?.find(product => product.title === "Smart TV"))
    }, [products])

    return (
        <div className="row">
            {thirdRowProduct
                ? <div >
                    <img
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                        alt=""
                    />

                    <div className="home__row">
                        {products.slice(0, 2)?.map(product => {
                            return <Product
                                key={product.title}
                                title={product.title}
                                price={product.price}
                                imgURL={product.imgURL}
                                rating={product.rating}
                            />
                        })}
                    </div>
                    <div className="home__row">
                        {products.slice(2, 5)?.map(product => {
                            return <Product
                                key={product.title}
                                title={product.title}
                                price={product.price}
                                imgURL={product.imgURL}
                                rating={product.rating}
                            />
                        })}
                    </div>
                    <div className="home__row">
                        <Product
                            key={thirdRowProduct?.title}
                            title={thirdRowProduct?.title}
                            price={thirdRowProduct?.price}
                            imgURL={thirdRowProduct?.imgURL}
                            rating={thirdRowProduct?.rating}
                        />
                    </div>
                </div>
                : <Loader />
            }
        </div>
    )
}

export default Home
