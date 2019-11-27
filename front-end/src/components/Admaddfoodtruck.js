import React, { Component } from 'react';
import axios from 'axios';
export default class Admaddfoodtruck extends Component {
  constructor(props) {
    super(props);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    // this.onChangType= this.onChangeType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      image: '',
      name: '',
      type: '',
      description: '',
      location: '',
      foodtrucknew: []
    }
  }
  // componentDidMount() {
  //   axios.get('http://localhost:5300/api/foodtrucks'+this.props.match.params.id)
  //     .then(response => {
  //       this.setState({
  //         name: response.data.name,
  //         description: response.data.description,
  //         location: response.data.location,
  //       })   
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  onChangeImage(e){
    this.setState({
      image: e.target.value
    })
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  // onChangeType(e) {
  //   this.setState({
  //     type: e.target.value
  //   })
  // }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const addfoodtruck = {
      image: this.state.image,
      name: this.state.name,
      // type: this.state.type,
      description: this.state.description,
      location: this.state.location,
    }
    console.log(addfoodtruck);
    axios.post('http://localhost:5300/foodTrucks/add', addfoodtruck)
      .then(res => console.log(res.data));
    window.location = '/';
  }
  render() {
    return (
    <div>1
      <h3>Add New Food Truck</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Image: </label>
          <input  type="image"
              required
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
              />
        </div>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        {/* <div className="form-group"> 
          <label>Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}
              />
        </div> */}
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Add" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}