import React, { Component } from 'react'
import Resturentslist from './Resturentslist'


export default class Restaurantinfo extends Component {
    render() {
        console.log("test")
        // console.log(this.props.food[0].pictures[0].picURL)
        // var resta = this.props.food.length > 0 ? this.props.food[0]: null 
        // var resta = !this.props.food ? [] : this.props.food[0]
        // console.log((this.props.food.length > 0) ? this.props.food[0].pictures[0].picURL : null )

        // this.props.food[0]&console.log(this.props.food[0].pictures[0])
        console.log('hi');


                return (
                    <div>
                        {this.props.food.map( item => {
            //   console.log(this.props.food[0]);
            //   console.log('hi');
              
                    return <Resturentslist foodName={item.name} foodImg={item.pictures[0].picURL} foodType={item.type}/>
                  })}
                    </div>
                )
            }
        }
        
