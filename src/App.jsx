import React from "react";
import {Navbar} from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemCount from "./components/ItemList/ItemCount";


const App = () => {
    return (
        <div className="App">
        <Navbar />
        <ItemListContainer greeting="Carrito de compras" />
        </div>
    )
};

export default App;
