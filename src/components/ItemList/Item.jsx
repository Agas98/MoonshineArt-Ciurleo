import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({id, title, price, image}) => {

	return (
		<div className='card m-2 w-72'>
			<div className='p-2 w-64 h-64'>
				<img
					src={image}
					className='card-img-top h-full object-contain w-full'
					alt={title}
				/>
			</div>
			<div className='card-body d-flex flex-column justify-content-center align-items-center'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text text-red-400 font-bold'>Precio: U$S {price}</p>
				<a href='#' className='btn btn-primary'>
					Ver detalle
				</a>
			</div>
		</div>
	);
};

export default Item;
