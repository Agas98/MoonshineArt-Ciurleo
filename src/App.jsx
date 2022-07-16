import React from 'react';

import './index.css';
import {Navbar} from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {Outlet} from 'react-router-dom';
import ItemListContainer from './components/ItemList/ItemListContainer';

export default function App() {
	return (
		<div className='root'>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
