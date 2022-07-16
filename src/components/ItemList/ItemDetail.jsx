import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ItemDetail = ({item}) => {
	let params = useParams();
	let id = params.id;

	return (
		<div className='card m-2 w-84 d-flex flex-column justify-content-center align-items-center'>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<h2 className='card-title'>{item[`${id - 1}`].title}</h2>
				<div className='p-2 w-84 h-64'>
					<img
						src={item[`${id - 1}`].image}
						className='card-img-top h-full object-contain w-full'
						alt={item[`${id - 1}`].title}
					/>
				</div>
			</div>
			<div className='card-body d-flex flex-column justify-content-center align-items-center'>
				<label htmlFor=''>
					Categoria: {item[`${id - 1}`].category}
				</label>
				<p className='card-text text-green-400 font-bold'>
					{item[`${id - 1}`].description}
				</p>
				<p className='card-text text-red-400 font-bold'>
					Precio: ${item[`${id - 1}`].price}
				</p>
				<a
					href='#'
					className='btn btn-primary'
					onClick={() => {
						console.log('Producto agregado al carrito');
					}}
				>
					Agregar al carrito
				</a>
				<Link className='my-2 btn btn-info' to='/'>
					Volver al carrito
				</Link>
			</div>
		</div>
	);
};

export default ItemDetail;
