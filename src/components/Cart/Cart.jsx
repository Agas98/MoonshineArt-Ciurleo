import React, {useContext} from 'react'
import CartContext from '../context/CartContext';
import CartContent from '../CartContent/CartContent';
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart } = useContext(CartContext);

  console.log('cart', cart)

  return (
    <>
    <p className='cart-title f-futurismL text-center my-30'>Carrito</p>
    <section className='cart'>
        {cart.length === 0 
        ? <div className='d-flex w-100 justify-content-center flex-column bg-dark p-3'>
            <p className='text-center text-light'>No hay productos en el Carrito</p>
            <Link to='/' className='text-center'><button className='card-button shrink-border mx-auto'>Volver al inicio</button></Link>
          </div>
        : <>
            <div className='cart-details d-flex flex-column'>
                <hr/>
                <CartContent/> 
            </div>
          </>}
    </section>
</>
  );
};

export default Cart