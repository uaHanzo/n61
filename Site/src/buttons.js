import React from 'react';
import vk from './vk.png';
import fb from './facebook.png';
import inst from './instagram.png';
import ReactDOM from 'react-dom';

function Buttons() {
    return (
      <div className="buttons">
        <a href="https://vk.com/"
          target="_blank"
          rel="noopener noreferrer" >
          <img src={vk} alt="vk" width="50" height="50"/>
          </a>

          <a href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer" >
          <img src={fb} alt="fb" width="50" height="50"/>
          </a>

          <a href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer" >
          <img src={inst} alt="inst" width="50" height="50"/>
          </a>
      </div>
    );}

ReactDOM.render(<Buttons />, document.getElementById("buttons"));