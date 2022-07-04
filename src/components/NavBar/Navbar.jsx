import React from 'react';
import CartWidget from './CartWidget';

export function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					M0ONSHINE ART
				</a>
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
							<a
								className='nav-link active'
								aria-current='page'
								href='#'
							>
								Aros
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Colgantes
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Gargantillas
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Anillos
							</a>
						</li>
					</ul>
					<CartWidget />
				</div>
			</div>
		</nav>
	);
}
