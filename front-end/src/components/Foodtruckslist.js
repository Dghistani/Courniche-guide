import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button,Container, Row, Col } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import CubeFoodTruck from "../assets/images/CubeFoodTruck.png";



export default class Foodtruckslist extends Component {

    render() {
      console.log(this.props.food);
      
        return (
          <div>
            
                <Navbar bg="light" variant="light">
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                  </Form>
               </Navbar>

                <br/>
              <div>
               <Container>
                  <Row>
                    <Col sm={4}><img src={this.props.foodImg} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h1>{this.props.foodName}</h1>
                      <h4>{this.props.foodType}</h4>
                      <Button variant="dark"> <Link to={ "/Foodtruckinfo/"+this.props.foodName} >see ditals</Link></Button> <br/>
                      <br/><Button variant="dark"> Go to Location </Button>

                      </Col>
                  </Row>
                  <br/>
                  
               </Container>
            </div>
            </div>
                      

        )
    }
}


// <Row>
//                    <Col sm={4}><img src={CubeFoodTruck} width="300" height="200"/></Col>
//                     <Col sm={8}>
//                       <h3>Food Trucks</h3>
//                       <h6>Lorem</h6>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
//                       <Button variant="info">Select</Button>
//                       </Col>
//                   </Row>
//                   <br/>
//                   <Row>
//                    <Col sm={4}><img src={CubeFoodTruck} width="300" height="200"/></Col>
//                     <Col sm={8}>
//                       <h3>Food Trucks</h3>
//                       <h6>Lorem</h6>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
//                       <Button variant="info">Select</Button>
//                       </Col>
//                   </Row>
//                   <br/>
//                   <Row>
//                    <Col sm={4}><img src={CubeFoodTruck} width="300" height="200"/></Col>
//                     <Col sm={8}>
//                       <h3>Food Trucks</h3>
//                       <h6>Lorem</h6>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
//                       <Button variant="info">Select</Button>
//                       </Col>
//                   </Row>
//                   <br/>