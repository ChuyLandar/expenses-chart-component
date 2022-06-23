import React from 'react';
import Balance from './Balance';
import Spending from './Spending';
import Footer from './Footer';

function App() {
  return (
    <div className='container'>
      <Balance />
      <Spending />
      <Footer />
    </div>
  );
}

export default App;
