import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8">
          <div className="btn btn-primary">Primary</div>
        </div>
        <div className="col-4">
          <div className="btn btn-secondary">Secondary</div>
        </div>
      </div>
    );
  }
}

export default App;
