import React from 'react';
import ItemList from './ItemList';
import products from '../../products.json';
import ItemAgregado from './ItemAgregado';

import {useEffect} from 'react';

const ItemListContainer = ({greeting}) => {
	
	// Muestro los items que hay en ItemList despues de 2 segundos de carga
	const getData = new Promise((resolve, reject) => {
		let afterPromises = true;
		setTimeout(() => {
			if (afterPromises) {
				resolve(products);
			} else {
				reject('Failed to get data');
			}
		}, 2000);
	});

	const [items, setItems] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	useEffect(() => {
		getData
			.then((data) => {
				setItems(data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h2 className='text-center fs-4'>{greeting}</h2>

			<ItemAgregado />
			{loading ? <h3 className='text-center fs-3 text-info'>Cargando articulos...</h3> : <ItemList items={items} />}
		</div>
	);
};
export default ItemListContainer;
