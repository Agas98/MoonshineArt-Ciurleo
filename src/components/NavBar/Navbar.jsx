import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

export function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					{' '}
					M0ONSHINE ART{' '}
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarNavDropdown'
				>
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
					<CartWidget />
				</div>
			</div>
		</nav>
	);
}
