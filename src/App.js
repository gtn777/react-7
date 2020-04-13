import React from 'react';
import './App.css';
import QuoteCard from "./components/QuoteCard.js";
import axios from 'axios';

const sampleQuote = 	
[{quote:	"I live in a single room above a bowling alley...and below another bowling alley.",
character:	"Frank Grimes",
image:	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
characterDirection:	"Left"}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      quoteApi: sampleQuote,
    }
    this.getQuote = this.getQuote.bind(this);      
  }
  getQuote() {
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        this.setState({
          quoteApi: data,
        });
    });
  }  
  render() {
    return ( 
    <div>
      <button type="button" onClick={this.getQuote}>Click!</button>
      <QuoteCard quote={this.state.quoteApi} />
    </div>         
    );
  }
}

export default App;