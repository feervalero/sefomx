import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
