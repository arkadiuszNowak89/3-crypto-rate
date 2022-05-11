import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoContainer.css';
import CryptoList from './CryptoList';

class CryptoContainer extends Component {
  constructor(props) {
    super(props);
    this.filter = '';
    this.state = {
      rates: [],
      filtered: [],
    };
  }

  /////////////////////
  ///// API

  async loadData(prevState) {
    const res = await axios.get('https://blockchain.info/ticker', {
      mode: 'cors',
    });
    const data = Object.values(res.data);

    if (prevState) {
      for (let i = 0; i < prevState.rates.length; i++) {
        const x = data[i].last - prevState.rates[i].last;
        data[i].balance = x;
      }
    }

    this.setState({
      rates: data,
      filtered: this.filterAction(data),
    });
  }

  /////////////////////
  ///// FILTR

  filterHandler = (filterVal) => {
    this.filter = filterVal || '';

    const data = this.filterAction(this.state.rates);

    this.setState({
      filtered: data,
    });
  };

  filterAction = (dataToTransform) => {
    return dataToTransform.filter((el) =>
      el.symbol.startsWith(this.filter.toUpperCase())
    );
  };

  /////////////////////
  ///// MONTOWANIE

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(_, prevState) {
    setTimeout(() => {
      this.loadData(prevState);
    }, 60000);
  }

  /////////////////////
  ///// RENDER

  render() {
    return (
      <div className='container'>
        <form>
          <input
            className='filter-input'
            type='text'
            maxLength={3}
            placeholder='Filter'
            onChange={(e) => this.filterHandler(e.target.value)}
          />
        </form>
        <CryptoList
          rates={this.filter ? this.state.filtered : this.state.rates}
        />
      </div>
    );
  }
}

export default CryptoContainer;
