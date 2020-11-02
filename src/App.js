import './App.css';
import React from 'react';
import data from './data';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
    const openmenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closemenu = () => {
        document.querySelector(".sidebar").classList.remove("open");

    }
    return (
        <BrowserRouter>   
         <div className="grid-container">

            <header className="header">
                <div className="brand">
                    <button onClick={openmenu}>
                        &#9776;
            </button>
            <Link to="/" >Notre site</Link>
                </div>
                <div className="header-links">

                    <a href="cart.html">cart</a>
                    <a href="signin">signin</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping categories</h3>
                <button className="sidebar_close" onClick={closemenu}>x</button>
                <ul>
                    <li>
                        <a href="INDEX.HTML">pants</a>
                    </li>

                    <li>
                        <a href="INDEX.HTML">shirts</a>
                    </li>
                </ul>
            </aside>

            <main className="main">
                <div className="content">
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />

  


                </div>
            </main>
            <footer className="footer">
                2020
    </footer>

        </div>
        </BrowserRouter>


    );
}

export default App;