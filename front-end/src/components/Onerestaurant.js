import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Onerestaurant extends Component {
    render() {

        var menu = !this.props.food ? [] : this.props.food[0]
        console.log(menu);
        return (
            <div>
                {menu.map(ele => {

                    return <div className="card">
                         
                                <h2>Name: {ele.name}</h2>
                            <h5>Price: {ele.price}</h5>
                            
                    </div>

                })}

            </div>
        )
    }
}