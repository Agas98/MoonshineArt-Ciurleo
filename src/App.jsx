import React from 'react';
import {Navbar} from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import './index.css';
import ItemCount from './components/ItemList/ItemCount';
import ItemAgregado from './components/ItemList/ItemAgregado';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';

export default function App() {
	return (
		<div id='app'>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route exact path='/' element={<ItemListContainer greeting='Tienda digital'/>} />
                    <Route path='/item/:id' element={<ItemDetailContainer greeting={`Detalle del producto`} />} />
{/* 					<ItemAgregado />
					<ItemDetailContainer greeting='Detalle de un producto' />
					<ItemListContainer greeting='Carrito de compras' /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}
