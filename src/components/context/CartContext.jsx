import { createContext, useState } from "react";
import swal from 'sweetalert';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const addToCart = (item) => {
        setCart([...cart, item])
            swal({
                title: 'Producto agregado al carrito',
                text: `Agregaste 1 unidad`,
                icon: 'success',
                buttons: ['Seguir comprando', 'Ver Carrito'],
            }).then(function (VerCarrito) {
                if (VerCarrito) {
                    window.location.href = '/cart';
                }else{
                    window.location.href = '';
                }
            });
            console.log(cart)
        }
    
    const removeFromCart = (item) => {
        console.log('removeFromCart', item)
        //setCart(cart.filter(i => i.id !== item.id))
    }
    
    const clearCart = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContext