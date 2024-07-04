// Fetch API Link: https://fakestoreapi.com/docs

import {NavLink} from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap'; // Ensure you have this line
import React from "react";
import {useState,useEffect} from "react";
import {Input, Space, Dropdown, Modal} from 'antd';
import './styles/style.css';
import ShopPageImage from './styles/banner.png';
import { DownOutlined } from '@ant-design/icons';
import Footer from './Footer.jsx';
// import Checkout from './CheckOut.jsx';
// import FunctionContext from './FunctionContext';
import WomensClothing from "./styles/women's_clothing.png";
import MensClothing from "./styles/mens_clothing.png";
import Jewelerry from "./styles/jewelerry.png";
import Electronics from "./styles/electronics.png";
import Cart from "./styles/cart.png";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [filter, setFilter] = useState([]);
    const [cart, setCart] = useState([]);
    const[quantity, setQuantity] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleOk = () => {
        setIsModalOpen(false);

    }

    const handleCancel=()=>{
        setIsModalOpen(false);
    }

    function fetchProducts(){
        fetch('https://fakestoreapi.com/products')
        .then((res) =>  {
            return res.json();
        })
        .then((data)=> {
            console.log(data);
            setProducts(data); 
        })
        .catch((error)=>{
            console.error("There was an error", error);
        })
    };

    useEffect(()=>{
        /* check if filter is not null or undefined, and then fetch the data from that category, then 
        setProducts with that data for that category*/
        fetchProducts();

        if(filter){
            fetch(`https://fakestoreapi.com/products/category/${filter}`)
            .then((res)=>res.json())
            .then((data)=> {
                console.log(data)
                setProducts(data);
            })
            .catch((error)=>{
                console.error("There was an error: " , error);
            });
        }
    }, [filter]);
    
    function filterByCategories(filter){
        console.log(filter);
        setFilter(filter);
    };

    function showItemsInCart (product) {
        setCartCount(cartCount+1);
        // adding the product to the cart list
        setCart([...cart, product]);
        console.log("Items In Cart:", cartCount + 1);
        console.log("Items In Cart:", [...cart, product]);
    }

    const items = [
        {
            key: '1',
            label: (
                <button onClick = { () => filterByCategories('electronics')}>
                    Electronics
                </button>
            )
        }, 

        {
            key: '2',
            label: (
                <button onClick = { () => filterByCategories('jewelery')}>
                    Jewelery
                </button>
            )
        }, 

        {
            key: '3',
            label: (
                <button onClick={ () => filterByCategories("men's clothing")}>
                    Men's Clothing
                </button>
            )
        }, 

        {
            key: '4',
            label: (
                <button onClick = {
                    () => filterByCategories("women's clothing")}>
                    Women's Clothing
                </button>
            )    
        },
    ]

    const {Search } = Input;

    const onSearch = (value, _e, info) => console.log(info?.source, value);

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
                        <Dropdown menu={{items}}>
                            <a target="_blank" rel="noopener noreferrer">
                                <Space>
                                    Categories
                                    <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </Nav>

            </div>

            <div className = "cart"> 
                <div><img src = {Cart} alt="Cart"/>
                    {cartCount}
                </div>

                <button className = "check-btn" onClick = {showModal}>
                    Checkout
                </button> 
            </div>

        </div>

        <Modal title="Proceed to CheckOut" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className ="cart-title"><h3>Your Cart</h3></div>
            
                    <div className = "cart-nav-container">
                        <ul>
                            <li>Product</li>
                            <li>Description</li>
                            <li>Qty</li>
                            <li>Price</li>
                        </ul>
                    </div>
                                
                    <div>   
                        {/* displaying the items in the cart */}
                        <div className="cart-container">
                            {cart.map((item)=> 
                            <div className = "flex-container">
                                <div className = "cart-image-container"><img src = {item.image} alt = {item.title} width="50"/></div>
                                <div className = "cart-title">{item.title}</div>
                                <div className = "cart-price">$ {item.price}</div>
                            </div>
                            )}
                        </div>
                    </div>

            <div className = "horizontal-line"></div>
        </Modal>

        <div className="shop-container">
            <div className = "shopPage-img-container"><img src = {ShopPageImage} alt = "shoppageimage" width="1900" /></div>
        </div>

        <div className = "gurantees-container">
            <div className = "gurantees-item">
                <h4>MONEY BACK</h4>
                <p>100% money back gurantee</p>
            </div>

            <div className = "gurantees-item">
                <h4>FREE SHIPPING & RETURNS</h4>
                <p>On all orders above $99</p>
            </div>

            <div className = "gurantees-item">
                <h4>24/7 SUPPORT</h4>
                <p>Online Support 24/7</p>
            </div>
        </div> 

        <h2 className = "categories-title">Categories</h2>
        <div className = "categories-title-line"></div>

        <div className = "categories-container">
            <div className = "electronics-item-container">
                <div><img src = {Electronics} width="200" height="200"/></div>
                <div>
                    <div>ELECTRONICS</div>
                    <div className = "categories-line"></div>
                </div>
                <div><button onClick = { () => filterByCategories('electronics')}>Shop Now</button></div>
            </div>  

            <div className = "jewelery-item-container">
                <div><img src = {Jewelerry} width="210" height="200"/></div>
                    <div className = "item-container">JEWELERRY</div>
                    <div className = "categories-line"></div>
                <button onClick = { () => filterByCategories('jewelery')}>Shop Now</button>
            </div>

            <div className = "mens-clothing-item-container">
                <div><img src = {MensClothing} width="180" height="200"/></div>
                <div className = "item-container">MEN'S CLOTHING</div>
                <div className = "categories-line"></div>

                <div><button onClick = { () => filterByCategories("men's clothing")}>Shop Now</button></div>
            </div>

            <div className = "womens-clothing-item-container">
                <div><img src = {WomensClothing} width="200" height="200"/></div>
                <div className = "item-container">WOMEN'S CLOTHING</div>
                <div className = "categories-line"></div>

                <div><button onClick = { () => filterByCategories("women's clothing")}>Shop Now</button></div>
            </div>
        </div>

           <h2 className = "products-title">New Products</h2>
            <div className = "categories-title-line"></div>

            <div className = "products-container">

                {products.map((product)=> 
                    <div key = {product.id} className ="flex-container">
                        <div className = "text-container">
                            <div className = "product-image-container">
                                <img src = {product.image} alt = {product.title} width="200" height="230"/>
                            </div>
                            <div className = "product-title">{product.title}</div>
                            <div className = "product-price"><p>${product.price}</p></div>
                            <button className = "add-to-cart-btn" onClick={()=>showItemsInCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                )}
            </div>
        <Footer/>
    </div>
    )
}

export default ProductsPage;