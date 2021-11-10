import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/heroes")
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => err);
  }

  render() {
    const { data } = this.state;
    return (
      <ul>
        {Array.isArray(data) &&
          data.map((obj) => (
            <li>
              <h1 className="heroName">{obj.nickname}</h1>
              {/* <img src={} className="App-logo" alt="logo" /> */}
              <p className="heroDescription">{obj}</p>
              {/* <a>Learn React</a> */}
            </li>
          ))}
      </ul>
    );
  }
}

export default App;
