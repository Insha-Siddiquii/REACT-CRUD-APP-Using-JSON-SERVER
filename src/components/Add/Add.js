import React, { Component }   from "react";
import '../Add/Add.scss';


class Add extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      address: "",
      neighborhood: "",
      contact: "",
      cuisine_type: "",
      photograph: "",
      latlng: {

        lat: "",
        lng: ""

      },
      restaurants: []
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState(this.sendFormData);
  }

  sendFormData() {
    var formData = {
      name: this.refs.name.value,
      neighborhood: this.refs.neighborhood.value,
      contact: this.refs.contact.value,
      cuisine_type: this.refs.cuisine_type.value,
      address: this.refs.address.value,
      photograph: this.refs.photograph.value,
      latlng: {
        lat: this.refs.lat.value,
        lng: this.refs.lng.value
      }
      
    };
    setTimeout(() => {
      console.log(formData);
      this.setState({ message: 'data viewed!' });
    }, 3000);
    fetch('http://localhost:3004/restaurants',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(formData),
     
    })
    
  }
  render() {
    return (
      <div>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossOrigin="anonymous"/>
        <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
            rel="stylesheet" type='text/css' />

        <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-12">
            <form role="form">
              <h2 className="title">Add Restaurant</h2>


              <hr className="colorgraph"/>
                <div name="addRestForm">
                  <div className="row">
                    <div className="col-xs-12  col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" ref="name" placeholder="Restaurant Name" />
                      </div>
                    </div>
                    <div className="col-xs-12  col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" ref="address" placeholder="Restaurant Address" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12  col-md-6">
                      <div className="form-group ">
                        <input type="text" className="form-control" ref="neighborhood" placeholder="Restaurant Nearby Location" />
                      </div>
                    </div>
                    <div className="col-xs-12  col-md-6">
                      <div className="form-group">
                        <input type="tel" className="form-control" ref="contact" placeholder="Contact no" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12  col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" ref="cuisine_type" placeholder="Cuisine Type" />
                      </div>
                    </div>
                    <div className="col-xs-12  col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" ref="lat" placeholder="Add Latitude" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" ref="lng" placeholder="Add Longitude" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div className="form-group">
                        <input type="url" className="form-control" ref="photograph" placeholder="Add Restaurant Image Url" />
                      </div>
                    </div>

                  </div>

                  <button className="btn_right btn btn-success btn-lg" onClick = {this.handleSubmit}>Save</button>



                </div>
         </form>
     </div>
          </div>

        </div>
      </div>

    );
  }
}

export default Add;
