import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from '../../products.json';
import swal from 'sweetalert';
import { useEffect } from 'react';

const ItemListContainer = ({greeting}) => {

	// Muestro los items que hay en ItemList despues de 2 segundos de carga
	const [items, setItems] = React.useState([]);
	useEffect(() => {
		setTimeout(() => {
			setItems(products);
		}, 2000);
	}
	, []);


	return (
		<div>
			<h2 className='text-center fs-4'>{greeting}</h2>
			<ItemCount
				stock={8}
				initial={1}
				onAdd={(n) => {
					swal({
						title: 'Producto agregado al carrito',
						text: `Agregaste ${n} productos`,
						icon: 'success',
						button: 'Continuar comprando',
					});
				}}
			/>
			<ItemList items={items} />
		</div>
	);
};
export default ItemListContainer;
