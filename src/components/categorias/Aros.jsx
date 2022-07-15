import React from 'react';
import producto from '../../products.json';
import Item from '../ItemList/Item';

const Aros = () => {
	const productos = producto.filter(
		(producto) => producto.category === 'Aros',
	);

	return (
		<div>
			<h1 className='text-center text-blue-900'>Aros</h1>
			<div className='d-flex flex-row justify-content-around flex-wrap'>
				{productos.map((producto) => (
					<Item {...producto} />
				))}
			</div>
		</div>
	);
};

export default Aros;
