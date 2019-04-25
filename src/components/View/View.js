import React, { Component } from "react";
import '../View/View.scss';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper , Marker} from 'google-maps-react';


class View extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      
      restaurants: {id: '' , name: '' , address: '', neighborhood:'', contact:'', cuisine_type: '',latlng:{ lat: '' , lng: ''},photograph: ''}
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("here in view id is: " + id);
    fetch('http://localhost:3004/restaurants/' + id)
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
 render() {

    return (
      <div>
   
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossOrigin="anonymous"/>
        <link
            href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
            rel="stylesheet" type='text/css' />





        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12">
              <form role="form">
                <h2 className="title">Foodox.<small>It's always easy <Link to={`/editrestaurant/${this.state.restaurants.id}`} className="fa fa-edit" title="Edit Restaurant" style={{color: 'inherit'}} ></Link></small></h2>
                <hr className="colorgraph"/>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" disabled name="name" value={this.state.restaurants.name || ''}  className="form-control input-lg" placeholder="Restaurant Name" tabIndex="1" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" disabled name="address" value={this.state.restaurants.address || ''} className="form-control input-lg" placeholder="Restaurant Address" tabIndex="2" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" disabled name="c_type" value={this.state.restaurants.cuisine_type || ''}  className="form-control input-lg" placeholder="Cuisine Type" tabIndex="5" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" disabled name="c_no" value={this.state.restaurants.contact || ''} className="form-control input-lg" placeholder="Contact no" tabIndex="6" />
                      </div>
                    </div>
                  </div>
                  </form>
                  </div>
                  </div>
                  <Map
        google={this.props.google}
        
        style={{
        width: '100%',
        height: '100%'
      }}
        initialCenter={{
         lat: this.state.restaurants.latlng.lat,
         lng: this.state.restaurants.latlng.lng
        }}
      />
                  </div>
                  </div>
        );
      }
    }
    
    export default GoogleApiWrapper({
      apiKey: 'YOUR_API_KEY_OF_GOOGLE_MAPS'
    })(View);
