import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aros from './components/categorias/Aros';
import Amuletos from './components/categorias/Amuletos';
import Anillos from './components/categorias/Anillos';
import Gargantillas from './components/categorias/Gargantillas';
import Categorias from './components/categorias/Categorias';
import './index.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));

	root.render (
		<div id='app'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<App/>}>

					    <Route path='categorias' element={<Categorias />}>
                    	    <Route path='aros' element={<Aros />} />
						    <Route path='amuletos' element={<Amuletos />} />
						    <Route path='anillos' element={<Anillos />} />
						    <Route path='gargantillas' element={<Gargantillas />} />
					    </Route>
                        <Route exact path='item/:id' element={<ItemDetailContainer greeting={`Detalle del producto`} />} />
					</Route>
                    
				</Routes>
			</BrowserRouter>
		</div>
	);