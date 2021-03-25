import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import Bag from '../pages/bag/index';
import Booking from '../pages/booking/index';

import Header from '../header/index';

import logo from '../../images/logo.png';

const App = () => {
  const supportsHistory = 'pushState' in window.history;
  return (
    <BrowserRouter 
      forceRefresh={!supportsHistory}
      basename="eStore"
    >
      <ErrorBoundary>
        <Helmet>
          <link rel="icon" href={logo}/>
        </Helmet>
        <Header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sales" component={Sales}/>
            <Route exact path="/contactus" component={ContactUs}/>
            <Route exact path="/laptops" component={Laptops}/>
            <Route exact path="/computers" component={Computers}/>
            <Route exact path="/phones" component={Phones}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/bag" component={Bag}/>
            <Route exact path="/booking" component={Booking}/>
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
