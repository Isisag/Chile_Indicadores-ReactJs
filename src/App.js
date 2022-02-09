import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer'
import CardContainer from './components/indicators/CardContainer';
import IndicatorsContextProvider from './contexts/IndicatorsContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Switch>
          <Route path="/" >
                <IndicatorsContextProvider>
                    <CardContainer />
                </IndicatorsContextProvider>
          </Route>
      </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
