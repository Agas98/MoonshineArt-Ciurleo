import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useState} from 'react';

const ItemDetail = ({item, initial, onAdd}) => {
	let params = useParams();
	let id = params.id;
	const stock = item[`${id - 1}`].stock;
	const [count, setCount] = useState(initial);

	// boton incrementar y decrementar
	const incrementar = () => {
		if (count < stock) { // Si el stock es mayor a la cantidad actual, se incrementa
			setCount(count + 1);
		}
	}
	const decrementar = () => {
		setCount((valAnt) => (valAnt > 1 ? count - 1 : count));
	}

	return (
		<div className='card m-2 w-84 d-flex flex-column justify-content-center align-items-center'>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<h2 className='card-title'>{item[`${id - 1}`].title}</h2>
				<div className='p-2 w-84 h-64'>
					<img
						src={item[`${id - 1}`].image}
						className='card-img-top h-full object-contain w-full'
						alt={item[`${id - 1}`].title}
					/>
				</div>
			</div>
			<div className='card-body d-flex flex-column justify-content-center align-items-center'>
			<h4 className='text-red-700'>En stock: {stock}</h4>
				<label htmlFor=''>
					Categoria: {item[`${id - 1}`].category}
				</label>
				<p className='card-text text-green-400 font-bold'>
					{item[`${id - 1}`].description}
				</p>
				<p className='card-text text-red-400 font-bold'>
					Precio: ${item[`${id - 1}`].price}
				</p>
				<div className='d-flex flex-row'>
				<button className='m-1 btn btn-outline-dark' onClick={decrementar}>-</button> 
				<button className='m-1 btn btn-outline-dark' onClick={incrementar}>+</button>
			</div>
			<h2 className='text-red-900'>
				{count > 0 ? `Cantidad: ${count}` : 'No hay stock'}
            </h2>
				<button
				className='btn btn-primary btn-lg'
				onClick={() => {
					count <= stock && onAdd(count);
				}}
			>
				Agregar al carrito
			</button>
				<Link className='my-2 btn btn-info' to='/'>
					Volver al carrito
				</Link>
			</div>
		</div>
	);
};

export default ItemDetail;
