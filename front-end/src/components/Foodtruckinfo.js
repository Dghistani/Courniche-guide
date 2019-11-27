import React, { Component } from 'react'
import Foodtruckslist from './Foodtruckslist'

export default class Foodtruckinfo extends Component {
    render() {
console.log(this.props.food)
        return (
            <div>
                {this.props.food.map( item => {
      console.log(item);
      console.log('hi');
      
            return <Foodtruckslist foodName={item.name} foodImg={item.image} foodType={item.type}/>
          })}
            </div>
        )
    }
}
