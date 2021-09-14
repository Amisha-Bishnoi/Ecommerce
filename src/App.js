import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import About from './component/about';
import Login from './component/auth/login';
import SignUp from './component/auth/signup';
import Contact from './component/contact';
import Home from './component/dashboard/home';
import Layout from './component/layout'

const App = () => {
  return (
    <BrowserRouter >
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;