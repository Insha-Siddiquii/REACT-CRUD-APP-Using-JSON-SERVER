import React, { Component } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Header from './components/Header/Header';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import View from './components/View';
import './styles.scss';
import { Route,Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Route  exact={true} path="/" component={RestaurantList} />
      <Route  path="/addrestaurant" component={Add}/>
      <Route  path="/viewrestaurant/:id" component={View}/>
      <Route  path="/editrestaurant/:id" component={Edit}/>

      
     
      
      
    </div>
        
      
    );
  }
}

export default App;
