import React from 'react';
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ErrorBoundary from '../../helpers/ErrorBoundary';

import Home from '../pages/home/index';
import Sales from '../pages/sales/index';
import ContactUs from '../pages/contactus/index';
import Laptops from '../pages/laptops/index';
import Computers from '../pages/computers/index';
import Phones from '../pages/phones/index';
import NotFound from '../pages/notfound/index';
import ProductInfo from '../pages/productInfo/index';
import Search from '../pages/search/index';

import Header from '../header/index';

import logo from '../../images/logo.png'

const App = () => {
  
  // !localStorage.getItem("gadgets") ? () => { localStorage.setItem("gadgets", JSON.stringify([])) }  : null
  const supportsHistory = 'pushState' in window.history;
  return (
    <BrowserRouter 
      forceRefresh={!supportsHistory}
    >
      <ErrorBoundary>
        <Helmet>
          <link rel="icon" href={logo}/>
        </Helmet>
        <Header>
          <Redirect from="/" to="/home"/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route exact path="/sales" component={Sales}/>
            <Route exact path="/contactus" component={ContactUs}/>
            <Route exact path="/laptops" component={Laptops}/>
            <Route exact path="/computers" component={Computers}/>
            <Route exact path="/phones" component={Phones}/>
            <Route exact path="/search" component={Search}/>
            <Route path="/computers/:computerid"  component={ProductInfo}/>
            <Route path="/laptops/:laptopid" component={ProductInfo}/>
            <Route path="/phones/:phoneid" component={ProductInfo}/>
            <Route component={NotFound}/>
          </Switch>
        </Header>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App;
