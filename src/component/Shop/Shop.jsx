import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedcart = [];
        // step 1: get id 
        for (const id in storedCart) {
            // step 2: get the product by id 
            const adddedProduct = products.find(product => product.id === id)
            // step 3: get quantity of the product 
            if (adddedProduct) {
                const quantity = storedCart[id];
                adddedProduct.quantity = quantity;
                // step 4 add the added product to the save cart
                savedcart.push(adddedProduct);
            }
            // console.log(adddedProduct);

        }
        // step 5 set the cart
        setCart(savedcart);
    }, [products])

    const handleAddTiCart = (product) => {
        const newCart = [...cart, product];
       


        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddTiCart={handleAddTiCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;