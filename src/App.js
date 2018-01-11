import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
  }

  componentDidMount() {
    fetch(`https://spreadsheets.google.com/feeds/list/10DgrO4bnuEVeH_pv_2B0DZxL2AwNo2W6zCxP03UtgHI/od6/public/values?alt=json`)
    .then(result => result.json())
    .then(data => this.setState({data: data.feed.entry}))
  }


  render() {
        return (
            <div> 
                {this.state.data.map(item => 
                       <div key={item.gsx$item}> {item.gsx$item.$t} </div>)}
            </div>
        );
      }
    }
export default App