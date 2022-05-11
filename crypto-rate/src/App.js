import logo from './logo.svg';
import './App.css';

import CryptoContainer from './CryptoContainer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          className='App-logo'
          src='https://www.sp.nl/sites/default/files/styles/page_section_float_260/public/bitcoin.png?itok=t3yyD4eF'
          alt=''
        />
        <h1>Crypto Rate</h1>
      </header>
      <CryptoContainer />
    </div>
  );
}

export default App;
