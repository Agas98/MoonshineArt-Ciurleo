import React from 'react';
import ItemCount from './ItemCount';
import swal from 'sweetalert';

const ItemListContainer = ({greeting}) => {
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
		</div>
	);
};
export default ItemListContainer;
