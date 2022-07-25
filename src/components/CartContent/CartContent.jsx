import React, {useContext} from 'react'
import CartContext from '../context/CartContext';

const CartContent = () => {

    const {cart, removeFromCart} = useContext(CartContext) // Get cart and removeFromCart function from CartContext

    return(
        cart.map(item => 
            <div key={item.id} className="cart-product">
                <span className="cart-product-img">
                    <img src={item.src1}alt="Imagen de Producto"/>
                </span>
                <div className="cart-product-info">
                    <p className="cart-product-info-name">{item.title}</p>
                    <p className="cart-product-info-unitPrize">${item.price}</p>
                </div>
                <div className="cart-product-price">
                    <p>Total Producto</p>
                    <p className="cart-product-price-total">${(item.price)}</p>
                </div>
                <div className="cart-product-buttons">
                    <button className="cart-button cart-button-black shrink-border shrink-border-black" onClick={() => {removeFromCart(item.id)}}>Borrar Producto</button>
                </div>
            </div>
            )
    )
}

export default CartContent