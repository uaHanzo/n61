import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './head';
import './carousel';
import './gallery';
import './text';
import './buttons';
import './cop';
import Weather from './weather';
import Currency from './currency';




ReactDOM.render(<Weather />, document.getElementById("weather"));
ReactDOM.render(<Currency />, document.getElementById("currency"));









// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
