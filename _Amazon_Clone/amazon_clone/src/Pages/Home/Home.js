import React, { useState, useEffect } from 'react';
import Product from '../../Components/Product/Product';
import Loader from '../../Components/Loader/Loader';
import { useSelector } from 'react-redux'
import './Home.css';

function Home() {
    const { products } = useSelector(state => state.products);
    const [firstRowProducts, setFirstRowProducts] = useState(undefined);
    const [secondRowProducts, setSecondRowProduct] = useState(undefined);
    const [thirdRowProducts, setThirdRowProducts] = useState(undefined);

    useEffect(() => {
        setFirstRowProducts(products
            ?.filter(product =>
                product.title === "Smartphone"
                || product.title === "Multy mixer"))
        setSecondRowProduct(products
            ?.filter(product =>
                product.title === "Fashion sneakers"
                || product.title === "Vintage camera"
                || product.title === "Headphones"));
        setThirdRowProducts(products
            ?.find(product =>
                product.title === "Smart TV"))
    }, [products])

    const areRowsReady = () => {
        return thirdRowProducts && secondRowProducts && firstRowProducts
    }

    return (
        <div className="row">
            {areRowsReady()
                ? <div >
                    <img
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                        alt=""
                    />
                    <div className="home__products">
                        <div className="home__row">
                            {firstRowProducts?.map(product => {
                                return <Product
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    imgURL={product.imgURL}
                                    rating={product.rating}
                                />
                            })}
                        </div>
                        <div className="home__row">
                            {secondRowProducts?.map(product => {
                                return <Product
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    imgURL={product.imgURL}
                                    rating={product.rating}
                                />
                            })}
                        </div>
                        <div className="home__row">
                            <Product
                                key={thirdRowProducts?.id}
                                id={thirdRowProducts?.id}
                                title={thirdRowProducts?.title}
                                price={thirdRowProducts?.price}
                                imgURL={thirdRowProducts?.imgURL}
                                rating={thirdRowProducts?.rating}
                            />
                        </div>
                    </div>
                </div>
                : <Loader />
            }
        </div>
    )
}

export default Home
