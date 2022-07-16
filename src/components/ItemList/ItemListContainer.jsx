import React from 'react';
import ItemList from './ItemList';
import products from '../../products.json';

import {useEffect} from 'react';

const ItemListContainer = ({greeting}) => {
	// Muestro los items que hay en ItemList despues de 2 segundos de carga
	const getData = new Promise((resolve, reject) => {
		let afterPromises = true;
		setTimeout(() => {
			if (afterPromises) {
				resolve(products);
			} else {
				reject('Error');
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
				console.error(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className='m-20' id='itemList'>
			<h2 className='text-center fs-4'>{greeting}</h2>

			{loading ? (
				<h3 className='text-center fs-3 text-info'>
					Cargando articulos...
				</h3>

			) : (
				<ItemList items={items} />
			)}
		</div>
	);
};
export default ItemListContainer;
