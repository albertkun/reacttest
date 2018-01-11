import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="background"></div>
      </div>
    );
  }
}

class background extends Component{
  constructor(){
    super();
    this.state ={
      items:[],
    };
  }

setInterval(function(){
  fetch('https://spreadsheets.google.com/feeds/list/10DgrO4bnuEVeH_pv_2B0DZxL2AwNo2W6zCxP03UtgHI/od6/public/values?alt=json')
  .then(results => {
    return results.json();
  }).then(data=>{
    let items = data.feed.entry.map((item) =>{
      return(
        <div key={item.gsx$item.$t}>
        <div>{item.gsx$item.$t}</div></div>
        )
    })
    this.setState({items: items});
    console.log("state",this.state.items)
  })
},2000);

render(){
  return(
    <div className="container1">{this.state.items}</div>)
}
export default App;
