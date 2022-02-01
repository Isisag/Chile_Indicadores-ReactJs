import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Header from './components/structure/Header';
import HomeContainer from "./components/structure/HomeContainer"
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <HomeContainer />
      <Switch>
      <Route exact path="/" component={HomeContainer} >
        texto ejemplo
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
