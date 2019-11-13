import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import matches from "./clicky.json";
import "./App.css";


let score = 0;
let topScore = 0;
let message = "Click an image to begin!";

class App extends Component {
  state = {
    matches,
    score,
    topScore,
    message
  }

  setClicked = id => {

    const matches = this.state.matches;

    const clickedMatch = matches.filter(match => match.id === id);


    if (clickedMatch[0].clicked){

        score = 0;
        message = "Someone's poisoned the water hole!"

        for (let i = 0 ; i < matches.length ; i++){
            matches[i].clicked = false;
        }

        this.setState({message});
        this.setState({score});
        this.setState({matches});

    } else if (score < 11) {

        clickedMatch[0].clicked = true;

        score++;
        
        message = "To infinity, and beyond!";

        if (score > topScore){
            topScore = score;
            this.setState({topScore});
        }

        matches.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({matches});
        this.setState({score});
        this.setState({message});
    } else {

        clickedMatch[0].clicked = true;

        score = 0;

        message = "You're my favorite deputy! You Win!";
        topScore = 12;
        this.setState({topScore});
        
        for (let i = 0 ; i < matches.length ; i++){
            matches[i].clicked = false;
        }

        matches.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({ matches });
        this.setState({score});
        this.setState({message});

    }
};


  render() {
    return (
      <Wrapper>
        <Navbar>
        <ul>
            <li>ClickyGame</li>
            <li>{this.state.message}</li>
            <li className="scoreSummary">Correct Guesses: {this.state.score} | Best Score: {this.state.topScore}</li>
          </ul>
        </Navbar>

        <Header>
          {/* <img className="logo" src="./assets/images/logo.png" alt="Toy Story Logo" /> */}
          <h3 className="headerText">Win the game by clicking each picture only once!</h3>
        </Header>

       
        {this.state.matches.map(match => (
          <MemoryCard
            setClicked={this.setClicked}
            id={match.id}
            key={match.id}
            name={match.name}
            image={match.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
