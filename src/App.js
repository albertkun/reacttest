import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        data: []
      }
    this.fetchData = this.fetchData.bind(this);
    
  }

  fetchData(){
    console.log('yes');
    fetch(`https://spreadsheets.google.com/feeds/list/10DgrO4bnuEVeH_pv_2B0DZxL2AwNo2W6zCxP03UtgHI/od6/public/values?alt=json`)
    .then(result => result.json())
    .then(data => this.setState({data: data.feed.entry}));
  }
  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(this.fetchData, 1000);
  }

  render() {
        return (
            <div> 
                {this.state.data.map(item => 
                       <div key={item.id.$t}> {item.gsx$item.$t} </div>)}
            </div>
        );
      }
    }
export default App