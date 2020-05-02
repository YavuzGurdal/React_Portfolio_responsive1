import React, { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';

import HeaderNavBar from './components/HeaderNavBar/HeaderNavBar';
import HomePage from './components/HomePage/HomePage';
import AboutMe from './components/AboutMe/AboutMe';
import MyWorks from './components/MyWorks/MyWorks';
import ContactMe from './components/ContactMe/CotactMe';




//import Page404 from './components/Page404'


function App() {
  return (
    <Fragment>
      <HeaderNavBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/work" component={MyWorks} />
        <Route path="/contact" component={ContactMe} />
        {/*
        <Route path="/testimonial" component={TestimonialPage} />
        <Route component={Page404} /> 
       <HomePage />
     */}
      </Switch>

    </Fragment>
  );
}

export default App;