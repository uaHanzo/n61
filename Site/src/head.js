import React from 'react';
import logo from './logo.png';
import './head.css';
import ReactDOM from 'react-dom';

function Head() {
    return(
        <div className="head">
             <header className="head-header">
            <img src={logo} className="logo" alt="logo" />
            </header>
        </div>
        )
}

ReactDOM.render(<Head />, document.getElementById('head'));