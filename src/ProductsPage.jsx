// Fetch API Link: https://fakestoreapi.com/docs

import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import {useState,useEffect} from "react";
import {Input, Space, Dropdown} from 'antd';
import './styles/style.css';
import ShopPageImage from './styles/banner.png';
import { DownOutlined } from '@ant-design/icons';
import Footer from './Footer.jsx';

function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [filter, setFilter] = useState([]);
    const [cart, setCart] = useState([]);

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

                    <div className = "nav-item">
                        <Nav.Item>
                            <Nav.Link as = {NavLink} to = "/"> Deals</Nav.Link>
                        </Nav.Item>
                    </div>
                    
                    <div className = "nav-item">
                        <Nav.Item>
                            <Nav.Link as={NavLink} to = "/checkout">Checkout</Nav.Link>
                        </Nav.Item>
                    </div>

                    <div className = "search-container">
                        <Space direction = "vertical">
                            <Search 
                                placeholder = "input search text"
                                onSearch = {onSearch}
                                style = {{
                                    width:200,
                                }}
                            />
                        </Space>
                    </div>
                    <div className = "account"> <h6>Account</h6> </div>

                    <div className = "cart"> <h6>{cartCount} Cart</h6></div>
                </Nav>
                
            </div>
        </div>

        <div className="shop-container">
            <div className = "shopPage-img-container"><img src = {ShopPageImage} alt = "shoppageimage" /></div>
        </div>

        <div>   
            {/* displaying the items in the cart */}
            <div className="cart-container">
                {cart.map((item)=> 
                <div>
                    <div className = "cart-image-container"><img src = {item.image} alt = {item.title} width="100"/></div>
                    <div className = "cart-title">{item.title}</div>
                </div>
                )}
                <div><button> Checkout</button></div>
            </div>
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

        <div>
            {filter &&  
                <div>
                    <h2>Current Category: {filter}</h2>
                </div> 
            }    
        </div>

            <div className = "products-container">

                {products.map((product)=> 
                    <div key = {product.id} className ="flex-container">
                        <div className = "text-container">
                            <div className = "product-image-container">
                                <img src = {product.image} alt = {product.title} width="300"/>
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