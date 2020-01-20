import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Routing from "./components/Routing";
function App() {
    return (
      <div className="App">
            <Routing />
      </div>
  );
}

export default connect(null)(App);
