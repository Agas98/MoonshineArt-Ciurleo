import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aros from './components/categorias/Aros';
import Amuletos from './components/categorias/Amuletos';
import Anillos from './components/categorias/Anillos';
import Gargantillas from './components/categorias/Gargantillas';
import './index.css';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import App from './App';
import {Navbar} from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

	root.render (
		<div id='app'>
			<BrowserRouter>
			<Navbar />
				<Routes>
					<Route exact path='/' element={<App/>}/>
						<Route exact path='aros' element={<Aros />} />
						<Route exact path='amuletos' element={<Amuletos />} />
						<Route exact path='anillos' element={<Anillos />} />
						<Route exact path='gargantillas' element={<Gargantillas />} />
						<Route exact path='item/:id' element={<ItemDetailContainer greeting={`Detalle del producto`} />} />
						<Route exact path='cart' element={<Cart/>}/>
				</Routes>
			<Footer />
			</BrowserRouter>
		</div>
	);