import React from "react";
import {Navbar} from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemList/ItemDetailContainer";
import "./index.css";

const App = () => {
    return (
        <div className="App">
        <Navbar />
        <ItemDetailContainer greeting="Detalle de un producto" />
        <ItemListContainer greeting="Carrito de compras" />
        </div>
    )
};

export default App;
