import React from 'react';
import {Navbar} from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Aros from './components/categorias/Aros';
import Amuletos from './components/categorias/Amuletos';
import Anillos from './components/categorias/Anillos';
import Gargantillas from './components/categorias/Gargantillas';

export default function App() {
	return (
		<div id='app'>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route exact path='/' element={<ItemListContainer greeting='Tienda digital'/>} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer greeting={`Detalle del producto`} />} />

                    <Route exact path='/categoria/aros' element={<Aros />} />
					<Route exact path='/categoria/amuletos' element={<Amuletos />} />
					<Route exact path='/categoria/anillos' element={<Anillos />} />
					<Route exact path='/categoria/gargantillas' element={<Gargantillas />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
