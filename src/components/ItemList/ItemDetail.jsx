import React from 'react';

const ItemDetail = ({item}) => {

	return (
		<div className='card m-2 w-84 d-flex flex-column justify-content-center align-items-center'>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<h4 className='card-title'>{item[0].title}</h4>
			<div className='p-2 w-84 h-64'>
				<img
					src={item[0].image}
					className='card-img-top h-full object-contain w-full'
					alt={item[0].title}
			/>
			</div>
			</div>
			<div className='card-body d-flex flex-column justify-content-center align-items-center'>
				<label htmlFor="">Categoria: {item[0].category}</label>
				<p className='card-text text-green-400 font-bold'>{item[0].description}</p>
				<a href='#' className='btn btn-primary' onClick={() => {
					console.log('Producto agregado al carrito');
				}}>
					Agregar al carrito
				</a>
			</div>
		</div>

	);
};

export default ItemDetail;
