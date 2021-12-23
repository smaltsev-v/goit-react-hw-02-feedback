import React from 'react';
import Control from './components/Control';


class App extends React.Component {
  
  state = {
    good: 0,
    neutral:0, 
    bad: 0,
  };

  btnClickFeedback = (e) => {
    const nameBtn = e.currentTarget.name;
    this.setState((prevState) => {
      return {
        [nameBtn]: prevState[nameBtn] + 1,
      };
    });
   };
    



  render() { 
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <Control
            options={this.state}
            onLeaveFeedback={this.btnClickHandler}
          />
        </div>
        <div>
          <h2> Statistics </h2>
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