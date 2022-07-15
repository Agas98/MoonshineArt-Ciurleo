import React from 'react'
import producto from '../../products.json';
import Item from '../ItemList/Item';

const gargantillas = () => {
	const productos = producto.filter(
		(producto) => producto.category === 'Gargantillas',
	);
	console.log(productos);
	return (
		<div>
			<h1 className='text-center text-blue-600'>Gargantillas</h1>
			<div className='d-flex flex-row justify-content-around flex-wrap'>
				{productos.map((producto) => (
					<Item {...producto} />
				))}
			</div>
		</div>
	);
}

export default gargantillas