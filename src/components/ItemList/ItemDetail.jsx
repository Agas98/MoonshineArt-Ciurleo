import React from 'react';
import {Link} from 'react-router-dom';

const ItemDetail = ({item}) => {

	return (
		<div className='card m-2 w-84 d-flex flex-column justify-content-center align-items-center'>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<h4 className='card-title'>{item.title}</h4>
			<div className='p-2 w-84 h-64'>
				<img
					src={item.image}
					className='card-img-top h-full object-contain w-full'
					alt={item.title}
			/>
			</div>
			</div>
			<div className='card-body d-flex flex-column justify-content-center align-items-center'>
				<label htmlFor="">Categoria: {item.category}</label>
				<p className='card-text text-green-400 font-bold'>{item.description}</p>
				<a href='#' className='btn btn-primary' onClick={() => {
					console.log('Producto agregado al carrito');
				}}>
					Agregar al carrito
				</a>
				<Link className='my-2 btn btn-info' to='/'>Volver al carrito</Link>
			</div>
		</div>

	);
};

export default ItemDetail;
