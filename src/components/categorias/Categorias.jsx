import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Categorias = () => {
    return (
        <div className='container-fluid'>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<Link className='nav-link' to='aros'>
						{' '}
						Aros{' '}
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='amuletos'>
						{' '}
						Amuletos{' '}
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='anillos'>
						{' '}
						Anillos{' '}
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='gargantillas'>
						{' '}
						Gargantillas{' '}
					</Link>
				</li>
			</ul>
            <Outlet/>
		</div>
	);
};

export default Categorias;
