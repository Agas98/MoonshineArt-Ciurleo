import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
	const [count, setCount] = useState(initial);

	const incrementar = () => {
		if (count < stock) { // Si el stock es mayor a la cantidad actual, se incrementa
			setCount(count + 1); 
		}
	};
	const decrementar = () => {
		setCount((valAnt) => (valAnt > 1 ? count - 1 : count)); // si el valor es menor a 1, no se puede decrementar
	};

	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<h2>
                {count === 1 ? '1 unidad' : `${count} unidades`} {/*Si el valor es 1, se muestra 1 unidad, sino se muestra el valor actual en unidades  */}
            </h2>
			<div className='d-flex flex-row'>
				<button className='m-1 btn btn-outline-dark' onClick={decrementar}>-</button> 
				<button className='m-1 btn btn-outline-dark' onClick={incrementar}>+</button>
			</div>
			<button
				className='btn btn-primary btn-lg'
				onClick={() => {
					count <= stock && onAdd(count);
				}}
			>
				Agregar al carrito
			</button>
			<h6>En stock: {stock}</h6>
		</div>
	);
};

export default ItemCount;
