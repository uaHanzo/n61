import React from 'react';
import gallery from './gallery.png'
import ReactDOM from 'react-dom';

function Gallery() {
    return (
      <div className="Gallery">
        <a href="https://www.google.com/search?q=%D0%BC%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D1%8C&sxsrf=ACYBGNSNLnaiHRVViV5zUm1k6lAdyObW1g:1568838645962&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiahs-xm9vkAhUoxMQBHfqlAokQ_AUIEigB"
          target="_blank"
          rel="noopener noreferrer" >
          <img src={gallery} className="Gallery-logo" alt="gal" width="50" height="50"/>
          </a>
      </div>
    );}

ReactDOM.render(<Gallery />, document.getElementById("gallery"));