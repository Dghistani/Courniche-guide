import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Jwflogo from "../assets/images/JWF-logo.png";
import Profileimg from "../assets/images/profilecopy.png";
import Resturents from "./Resturents";
import Foodtrucks from "./Foodtrucks";
import Homepage from "./Homepage";
import SushiCentro from "./SushiCentro";
import axios from "axios"
import Foodtruckinfo from './Foodtruckinfo';
import Onefoodtruck from './Onefoodtruck';
import Restaurantinfo from './Restaurantinfo';
import Onerestaurant from './Onerestaurant';


export default class Navbarmenu extends Component {
  state = {
    data: [],
    restaurantdata: [],
  }
  componentDidMount() {
    axios.get('http://localhost:5300/api/foodtrucks/')
      .then(res => {
      
        this.setState({ data: res.data,})
        console.log(res);

        
      })
      .catch(err=> console.log(err)
      )
      axios.get('http://localhost:5300/api/Restaurants/')
      .then(res => {
      
        this.setState({ restaurantdata: res.data,})
        console.log(res);

        
      })
      .catch(err=> console.log(err)
      )
  }
    render() {
        return (
            <div>
                <BrowserRouter>
              <Navbar className="navmenu">
                 <img className="jwflogo" src={Jwflogo} />
                 <h1>Jeddah WaterFront</h1>
                 <Link  className="nav-link" to="/JeddahWaterFront">HOME</Link>
                 <Link  className="nav-link" to="/Resturents">Resturents</Link>
                 <Link  className="nav-link" to="/FoodTrucks">Food Trucks</Link>
                 
                      <img className="profileimg" src={Profileimg}/>
                      <NavDropdown  id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
                      </NavDropdown>
             </Navbar>
             <Switch>
             <Route path="/Foodtruckinfo/:name" render={ (props)=> <Onefoodtruck {...props}  food={ this.state.data.length == 0?   0 : this.state.data.filter(ele =>{
        return  props.match.params.name == ele.name            
          }) }/>} />
          <Route path="/Restaurantinfo/:name" render={ (props)=> <Onerestaurant {...props}  food={ this.state.restaurantdata.length == 0?   0 : this.state.restaurantdata.filter(ele =>{
        return  props.match.params.name == ele.name            
          }) }/>} />
             <Route  path="/JeddahWaterFront" component={Homepage} />
             {/* <Route  path="/Resturents" component={Resturents} /> */}
             <Route path="/Resturents" render={ ()=> <Restaurantinfo food={this.state.restaurantdata}/>} />
             <Route path="/Foodtrucks" render={ ()=> <Foodtruckinfo food={this.state.data}/>} />

             {/* <Route  path="/Foodtrucks" component={Foodtrucks} /> */}
             <Route  path="/SushiCentroResturent" component={SushiCentro} />
            </Switch>
         </BrowserRouter>
           </div> 
        )
    }
}
