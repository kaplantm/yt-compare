import React, {Component} from 'react';
import ComparisonCard from './ComparisonCard';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Compare Youtube</h1>
      </header>

      <p className="padding1rem whiteBg">Compare tags and video statistics between Youtube videos.</p>

      <div className="compareCellContainer flex-container">
        <ComparisonCard/>
        <ComparisonCard/>
      </div>

    </div>);
  }
}

export default App;
