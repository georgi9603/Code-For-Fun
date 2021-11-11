import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './OrderCheckout.css'

function OrderCheckout() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [secondAddress, setSecondAddress] = useState("");

    const { shoppingCart } = useSelector(state => state.shoppingCart);

    const handleSubmitForm = (e) => {
        e.preventDefault()

        const validateShoopingCartIsNotEmpty = () => shoppingCart.length !== 0 ? true : false


        const validateIfRequiredFieldsAreNotEmpty = () => firstName.length >= 1
            && lastName.length >= 1
            && phoneNumber.length >= 1
            && address.length >= 1
            ? true
            : false

        if (validateShoopingCartIsNotEmpty() && validateIfRequiredFieldsAreNotEmpty()) {
            // const orderObject = {
            //     customer: {
            //         firstName: firstName,
            //         lastName: lastName,
            //         phoneNumber: phoneNumber,
            //         address: address,
            //         secondAddress: secondAddress
            //     },
            //     products: shoppingCart
            // }
        } else {
            alert("Not all required fields are filled or shopping cart is empty!")
        }

        //TODO show shopping cart alert and check before this page loads. 
        //TODO on typing show which fields are not valid and some info icon what is valid field.
        //TODO If shopping card or fields are empty or not valid alert error and no save to DB 
        //TODO add save to DB

        //TODO if user is logged in get data and fill fields if data is available.
        //TODO after adding two same items show quantity and not dublicate items.
        //TODO adding and removing quantity on added products
    }

    return (
        <div className="orderCheckout">
            <Link to="/">
                <img
                    className="orderCheckout__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="orderCheckout__container">
                <h1>Order without creating new accout</h1>
                <form>
                    <h5>*First Name</h5>
                    <input name="first name" value={firstName} onChange={e => setFirstName(e.target.value)} type="text" />
                    <h5>*Last Name</h5>
                    <input name="last name" value={lastName} onChange={e => setLastName(e.target.value)} type="text" />
                    <h5>*Phone number</h5>
                    <input name="phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="text" />
                    <h5>*Address</h5>
                    <input name="address" value={address} onChange={e => setAddress(e.target.value)} type="text" />
                    <h5>Second Address</h5>
                    <input name="second address" value={secondAddress} onChange={e => setSecondAddress(e.target.value)} type="text" />
                    <button onClick={e => handleSubmitForm(e)} type="submit">Order Now</button>
                </form>
                <p>
                    By signing-up you agree to Amazon's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cokkies Notice and our interest-Based Ads Notice.
                </p>
                <Link to="/register" className="orderCheckout__loginLink">
                    <button>Create new account</button>
                </Link>
            </div>
        </div>
    )
}

export default OrderCheckout
