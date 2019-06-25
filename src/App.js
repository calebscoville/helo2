import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import routes from './routes'


function App() {
  return (
    <div className="App">
      {routes}
      <Nav />
    </div>
  );
}

export default App;
