import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import TalkToAstrologer from './components/talkToAstrologer/TalkToAstrologer';

export class App extends Component {
  // componentDidMount() {
  //   this.unlisten = browserHistory.listen( location =>  {
  //         console.log('route changes');  
  //    });
  // }
  
  // componentWillUnmount() {
  //   this.unlisten();
  // }

  render() {
    return (
          <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/talk-to-astrologer" exact component={TalkToAstrologer}/>
          </Router>
    )
  }
}

export default App;
