import React from 'react';
import List from './components/List';

const App = () => {
  const name='atiar'

  const sum = (a,b)=>a+b
  return (
    <div className='bg-red-400'>
      <h1 className='bg-amber-100'>Hello</h1>
      {
        name?"hello name":"not "
      }
      <h2>this summation:{sum(3,4)}</h2>
      <List></List>
    </div>
  );
};

export default App;