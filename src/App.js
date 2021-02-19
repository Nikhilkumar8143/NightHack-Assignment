import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from './pages/NotFoundPage';
import { initialState, reducer } from "./store/reducer";
import './assets/css/style.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import UserRepo from './components/UserRepos';
import Login from './components/Login';


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
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/repos" component={UserRepo}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>
    </Router>
    <Footer/>
    </AuthContext.Provider>
  );
}

export default App;
