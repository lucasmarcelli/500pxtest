import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import configureStore from './redux/store';
import PopularContainer from "./containers/PopularContainer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Provider store={configureStore()}>
          <div className="App">
            <Route component={Header}/>
            <Route exact path="/" render={() => <Redirect to="/popular/1"/>}/>
            <Route exact path="/popular" render={() => <Redirect to="/popular/1"/>}/>
            <Route path="/popular/:page" component={PopularContainer}/>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
