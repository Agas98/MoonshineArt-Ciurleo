import React from 'react'
import Item from '../ItemList/Item'
import producto from '../../products.json';

const anillos = () => {
	const productos = producto.filter(
		(producto) => producto.category === 'Anillos',
	);
	console.log(productos);
	return (
		<div className='my-20'>
			<h1 className='text-center text-blue-600'>Anillos</h1>
			<div className='d-flex flex-row justify-content-around flex-wrap'>
				{productos.map((producto) => (
					<Item {...producto} />
				))}
			</div>
		</div>
	);
}

export default anillos