import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

class App extends React.Component
{
  constructor()
  {
    super();
  }
  
  render()
  {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
