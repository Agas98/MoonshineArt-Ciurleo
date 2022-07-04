import React from "react";
import {Navbar} from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";


const App = () => {
    return (
        <div className="App">
        <Navbar />
        <ItemListContainer greeting="Probando si funciona" />
        </div>
    )
};

export default App;
