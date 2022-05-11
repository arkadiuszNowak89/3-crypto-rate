import React from 'react';
import './CryptoList.css';
import { getBalancedRate } from './tools.js';

function CryptoList(props) {
  const createListItems = () => {
    return props.rates.map((el) => {
      return (
        <li className='list-item' key={el.last}>
          <span>Last rate:</span>
          {getBalancedRate(el.last, el.balance)}
          {el.symbol}
        </li>
      );
    });
  };

  return (
    <div>
      <ul className='crypto-list'>{createListItems()}</ul>
    </div>
  );
}

export default CryptoList;
