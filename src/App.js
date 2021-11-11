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
    console.log(data);
    return (
      <ul>
        {Array.isArray(data) &&
          data.map((obj) => (
            <li>
              <h1 className="heroName">{obj.nickname}</h1>
              <img src={data} className="App-logo" alt="logo" />
            </li>
          ))}
      </ul>
    );
  }
}

export default App;
