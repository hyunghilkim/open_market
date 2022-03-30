import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/product/:productId" component={Product} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
