import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
        <footer className='footer'>
		<div class='copyright'>
			<div class='container'>
				<div class='row'>
					<div class='col-md-6'>
						<span>Copyright © 2022 - Todos los derechos reservados</span>
					</div>
					<div class='col-md-6'>
						<div class='copyright-menu'>
							<ul>
								<li>
									<Link to='/'>Inicio</Link>
								</li>
								<li>
									<a href='#'>Contacto</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </footer>
	);
};

export default Footer;
