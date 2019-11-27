import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button,Container, Row, Col } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";



export default class Resturentslist extends Component {

    render() {
      // console.log(this.props.food);
      
        return (
            <div>
                <Navbar bg="light" variant="light">
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                  </Form>
               </Navbar>

                <br/>

               <Container>
                  <Row>
                    <Col sm={4}><img src={this.props.foodImg} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h1>{this.props.foodName}</h1>
                      <h4>{this.props.foodType}</h4>
                      <Button variant="dark"> <Link to={ "/Resturantinfo/"+this.props.foodName} >see ditals</Link></Button> <br/>
                      <br/><Button variant="dark"> Go to Location </Button>

                      </Col>
                  </Row>
                  <br/>
                  
               </Container>
            </div>
        )
    }
}









// import React, { Component } from 'react';
// import { Navbar, Form, FormControl, Button,Container, Row, Col } from 'react-bootstrap';
// import Andalusia from "../assets/images/Andalusia.jpg";
// import SushiCentroimg from "../assets/images/SushiCentro.jpg";


// export default class Resturentslist extends Component {
//     render() {
//         return (
//             <div>
            
//                 <Navbar bg="light" variant="light">
//                   <Form inline>
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-primary">Search</Button>
//                   </Form>
//                </Navbar>
//                 <br/>
//                <Container>
//                   <Row>
//                     <Col sm={4}><img src={SushiCentroimg} width="300" height="200"/></Col>
//                     <Col sm={8}>
//                       <h3>Sushi Centro</h3>
//                       <h6>Japanese</h6>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
//                       <Button variant="info"><a href="./SushiCentro">Select</a></Button>
//                       </Col>
//                   </Row>
//                   <br/>
//                   <Row>
//                    <Col sm={4}><img src={Andalusia} width="300" height="200"/></Col>
//                     <Col sm={8}>
//                       <h3>Resturent</h3>
//                       <h6>Lorem</h6>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
//                       <Button variant="info">Select</Button>
//                       </Col>
//                   </Row>
//                   <br/>
//                   <Row>
//                    <Col sm={4}><img src={Andalusia} width="300" height="200"/></Col>
//                     <Col sm={8}>
//                       <h3>Resturent</h3>
//                       <h6>Lorem</h6>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
//                       <Button variant="info">Select</Button>
//                       </Col>
//                   </Row>
//                   <br/>
//                   <Row>
//                    <Col sm={4}><img src={Andalusia} width="300" height="200"/></Col>
//                     <Col sm={8}>
//                       <h3>Resturent</h3>
//                       <h6>Lorem</h6>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
//                       <Button variant="info">Select</Button>
//                       </Col>
//                   </Row>
//                   <br/>
//                </Container>

//             </div>
//         )
//     }
// }
