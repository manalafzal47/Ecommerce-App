import React from 'react';
import './styles/style.css';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function CheckOut(){
    return (
        <div>
            <div className = "app-title"><h1>NexTrend</h1></div>
                <div className = "horizontal-line"></div>
                    <div className = "navigation-bar">
                        <div className = "navigation-container">
                            <Nav 
                                activeKey="/"
                                onSelect ={(selectedKey)=> alert(`selected ${selectedKey}`)}>
                            <div className = "nav-item">
                                <Nav.Item>
                                    <Nav.Link as = {NavLink} to = "/"> Deals</Nav.Link>
                                </Nav.Item>
                            </div>
                            <div className = "nav-item">
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to = "/checkout">Check Out</Nav.Link>
                                </Nav.Item>
                                </div>
                            </Nav>
                        </div>

                <div className ="cart-title"><h2>YOUR CART</h2></div>
                    
                <div className = "cart-nav-container">
                    <ul>
                        <li><a href="#">Product</a></li>
                        <li><a href="#"> Qty</a></li>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">Total Price</a></li>
                    </ul>
                </div>

                <div className = "horizontal-line"></div>

                <div className="flexbox-container">
                    <div className = "shipping-method-container">
                        <h4>SHIPPING METHOD</h4>
                        <ul>
                            <p>In store pickup</p>
                            <p>Standard Shipping</p>
                            <p>Priority Shipping - $5.00</p>
                        </ul>
                    </div>

                    <div className="checkout-details-container">
                        <p>Subtotal</p>
                        <p>Sales Tax</p>
                        <p>Shipping</p>

                        <p>Estimated Total</p>

                        <div className="checkout-line"></div>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;

