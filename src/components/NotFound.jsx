import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Sua página não foi encontrada</h1>
        <img
          src="https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"
          alt="Pikachu crying because the page requested was not found"
        />
      </div>
    );
  }
}

export default NotFound;
