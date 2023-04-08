import { getShoppingCart } from "../utilities/fakedb";

const CartProductLoader=async()=>{
    const loaderProduct=await fetch('products.json');
    const products=await loaderProduct.json();
    console.log(products);

    const storedCart= getShoppingCart();
    const saveCart=[];
    console.log(storedCart);
    for(const id in storedCart){
        const addedProduct=products.find(pd=>pd.id===id)
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            saveCart.push(addedProduct)
        }
    }
    return saveCart;
}

export default CartProductLoader;