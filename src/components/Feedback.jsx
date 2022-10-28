import React from 'react';

export default class Counter extends React.Component {
  handleIncrement = () => {
    console.log('Гуууд');
    console.log(this);
  };

  render() {
    return (
      <div className="Counter">
        <h1>Please, leave feedback</h1>
        <button type="button" onClick={this.handleIncrement}>
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('нейтраль');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('бэд');
          }}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: 3</p>
        <p>Neutral: 2</p>
        <p>Bad: 2</p>
      </div>
    );
  }
}
