import React from 'react';

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
    for (var i=0; i<currencyData.length; i++){
       currencies.push(
        <div><span>{currencyData[i].ccy}</span> <span>{currencyData[i].buy}</span> <span>{currencyData[i].sale}</span></div>
       );
    }
    
    return (<div>{currencies}</div>);
  }
}

export default CurrencyDisplay;