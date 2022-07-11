import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
	return (
		<div className='d-flex flex-row justify-content-around flex-wrap'>
			{items.map((el) => (
				<Item {...el}/>
			))}
		</div>
	);
};

export default ItemList;
