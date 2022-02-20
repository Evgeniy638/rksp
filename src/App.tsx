import React from 'react';

import Footer from './organisms/Footer';
import Header from './organisms/Header';
import Main from './organisms/Main';
import Menu from './organisms/Menu';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App__Header">
                <Header />
            </div>
            <div className="App__Main">
                <Main />
            </div>
            <div className="App__MenuFooter">
                <Menu />
            </div>
            <div className="App__Footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
