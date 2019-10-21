import React from 'react';
import './App.css';
//Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
//Router
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/services" component={ServicesPage} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
