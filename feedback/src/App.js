import React from 'react';


class App extends React.Component {
  
  state = {
    good: 0,
    neutral:0, 
    bad: 0,
  };
  render() { 
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type='button'>Good</button>
          <button type='button'>Neutral</button>
          <button type='button'>Bad</button>
        </div>
        <div>
          <ul>
            <li>Good</li>
            <li>Neutral</li>
            <li>Bad</li>
          </ul>
        </div>
      </div>
    );
  };
 };
export default App;