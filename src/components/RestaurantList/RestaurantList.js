import React , { Component }   from "react";
import '../RestaurantList/RestaurantList.scss';
import '../../../node_modules/json-loader';
import { Route,Redirect } from 'react-router-dom';





class RestaurantList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      restaurants: [],
      error: null,
      isLoading: Boolean = false
    };
    
    
  }
  componentDidMount(){
    fetch('http://localhost:3004/restaurants')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then (data => this.setState({restaurants: data}))
    .catch (error => this.setState({error }));

  }
  onViewMore (id) {
    const { history } = this.props;
    history.push('/viewrestaurant/' + id);
    
    

  }
  
  
  render() {
    const { restaurants } = this.state;
    return (
      <div>
        
        <div className="row cards">
          
          
          {restaurants.map(restaurant =>
          <div className="small-3 panel columns card"  key={restaurant.id}>
          <img src={restaurant.photograph} alt={restaurant.id} className="img-responsive imgWidth" />
          <h1 className="rest">{restaurant.name}</h1>
          <p className="type">Cuisine {restaurant.cuisine_type}</p>
          <p className="address">{restaurant.address}</p>
          <div className="button-View" onClick={() => this.onViewMore(restaurant.id)}>View More</div>
          </div>
          )}
          
        </div>
          
      </div>
      

    );
  }
}


export default RestaurantList;
