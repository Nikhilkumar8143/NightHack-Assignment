import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from './pages/NotFoundPage';
import { initialState, reducer } from "./store/reducer";
import './assets/css/style.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import UserRepo from './components/UserRepos';


export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <Router>
      <Header/>
      <Switch>
        {/* <Route path="/login" component={Login}/> */}
        <Route exact path="/"><HomePage /></Route>
        <Route path="/repos" component={UserRepo}></Route>
        {/* <Route path="/login"><Login /></Route> */}
        <Route path="*"><NotFoundPage /></Route>
      </Switch>
    </Router>
    <Footer/>
    </AuthContext.Provider>
  );
}

export default App;
