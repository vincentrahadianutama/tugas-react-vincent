import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Welcome from './WelcomeComponent';

class Header extends React.Component {
  constructor() {
    super();
    // membuat objek state
    this.state = {
      title: "Belajar Reactjs",
      subTitle: "Panduan step-by-step Reactjs untuk pemula"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subTitle}</h2>
        <button onClick={this.changeTitle}>Ubah Judul</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;