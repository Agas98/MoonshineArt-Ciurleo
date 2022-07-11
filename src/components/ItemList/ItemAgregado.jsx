import React from 'react';
import ItemCount from './ItemCount';
import swal from 'sweetalert';

const ItemAgregado = () => {
	return (
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
	);
};

export default ItemAgregado;
