import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Onerestaurant extends Component {
  
    render() {

        var munu = !this.props.food ? [] : this.props.food
        console.log(munu);
        return (
            <div>
                {munu.map(ele => {

                    return <div className="card"> 
                    <img src={ele.pictures[0].picURL} width="auto" height="200"/>
                    <h2> {ele.name}</h2>
                    <h5> {ele.type}</h5>
                    <p>{ele.description}</p>                           
                    </div>

                })}

            </div>
        )
    }
}
