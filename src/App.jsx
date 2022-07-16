import React from 'react';

import './index.css';
import {Navbar} from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ItemListContainer from './components/ItemList/ItemListContainer';

export default function App() {
	return (
			<ItemListContainer />
	);
}
