import React from 'react';

const Item = ({id, title, description, price, image}) => {
	return (
		<div className='card m-2' style={{width: '18rem'}}>
			<img src={image} className='card-img-top' alt={title} />
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{description}</p>
				<p className='card-text'>Precio: {price}</p>
				<a href={'/' + id} className='btn btn-primary'>
					Ver detalle
				</a>
			</div>
		</div>
	);
};

export default Item;
