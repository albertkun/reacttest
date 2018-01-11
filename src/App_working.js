import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super() 
      this.state = {
        jokes: []
      }
    
  }

  componentDidMount() {
    fetch(`http://api.icndb.com/jokes`)
    .then(result => result.json())
    .then(jokes => this.setState({jokes: jokes.value}))
  }


  render() {
        return (
            <div> 
                {this.state.jokes.map(joke => 
                       <div key={joke.id}> {joke.joke} </div>)}
            </div>
        );
      }
    }
export default App