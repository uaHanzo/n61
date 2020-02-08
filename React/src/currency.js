import React from 'react';
import usd from './usd2.jpeg';


class CurrencyDisplay extends React.Component {
   constructor() {
    super();

    this.state = {
      currencyData: null
    };
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currencyData !== this.props.currencyData) {
      this.fetchCurrency();
    }
  }
 
  fetchCurrency() {
   
    const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ currencyData: json });
    });
  }

  render() {
    const { currencyData } = this.state;

    if (!currencyData) return <div>Loading</div>;
    let currencies = [];
    {currencies.push(
        <div id="cur">
          <a><img src={usd} alt="usd" width="35" height="35"/></a>
          <span>{currencyData[0].ccy}</span> <span>{currencyData[0].buy}</span> <span>{currencyData[0].sale}</span>
        </div>
           );}
    
    return (<div>{currencies}</div>);
  }
}

export default CurrencyDisplay;