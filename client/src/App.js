import React from "react";
import './app.css'
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/Home/Home'
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from './pages/login/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/header'>
          <Header />
        </Route>
        <Route path='/write'>
          <Write />
        </Route>
        <Route path='/single'>
          <Single />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route> 
        <Route path='/login'>
        <Login/>
        </Route>
        <Route path='/register'>
        <Register/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
