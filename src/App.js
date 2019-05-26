import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Photos from "./components/Photos";

const API_ACCESS_KEY =
  "01f45c0a35be1d488d898302ac41cb1cba695116f4eeb86e1c51d7a6d5f0aa7a";
const CORS_URL = "https://cors-anywhere.herokuapp.com";
const BASE_URL = "/https://api.unsplash.com";

class App extends Component {
  state = {
    results: [],
    keywords:""
  };

  getPhoto = async e => {
    const keyword = e.target.elements.keyword.value;
    this.setState({keywords: keyword });
    
    console.log(this.state.keywords);
    
    e.preventDefault();
    console.log(keyword);
    const api_call = await fetch(`${CORS_URL}${BASE_URL}/search/photos?per_page=21&query=${keyword}&client_id=${API_ACCESS_KEY}`);
    
    const data = await api_call.json();
    this.setState({ results: data.results });
    console.log(this.state.results);
    
  };
  
  
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">OnSnap</h1>
          </header>
          <Form getPhoto={this.getPhoto} />
          <Photos results={this.state.results} keywords={this.state.keywords}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
