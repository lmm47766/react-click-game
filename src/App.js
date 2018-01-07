import React from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {  

  state={
    friends:friends,
    score: 0,
    topScore:0,
    answer: "Click To Start",
    color:"white"
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  };

  correct = ( ) => {
      this.setState({ answer: "You guessed correct" });
      this.setState({ color: "green" });
  };

  incorrect = () => {
      this.setState({ answer: "You guessed incorrect" });
      this.setState({ color: "red" });
  };

  checkTopScore = () => {
    if (this.state.score >this.state.topScore) {
        this.setState({ topScore: this.state.score });
    }
  };

  reset =() => {
    this.checkTopScore();
    this.setState({ score: 0 });
    this.state.friends.forEach((friend) => {
        friend.clicked=false;
    });
  };

  update = (friendId) => {
    this.state.friends.forEach((friend) => {
      if (friend.id === friendId) {
        if (friend.clicked) {
          this.incorrect();
          this.reset();
        }
        else {
          this.correct();
          friend.clicked=true;
          this.setState({ score: this.state.score + 1 });
        }
      }
    });


    this.setState({friends:friends});
  };

  render(){

    this.shuffle(this.state.friends);
    var List = this.state.friends.map( item =>         
      <FriendCard
          id={item.id}
          key={item.id}
          name={item.name}
          image={item.image}
          update={this.update}
          datac={item.clicked.toString()}
        />) ;

    return (
      <div>
        <Navbar color={this.state.color} answer={this.state.answer} score={this.state.score} topScore={this.state.topScore}/> 
        <Header/>
          <Wrapper>
            {List}
          </Wrapper>
         <Footer/>
      </div>
    )
  }

}  



export default App;
