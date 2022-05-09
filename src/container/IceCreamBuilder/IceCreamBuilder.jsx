import React, { Component } from 'react'
import Icecream from "../../components/IceCream/IceCream"
import Builder from "../../components/Builder/Builder"



export default class IceCreamBuilder extends Component {
  state ={
    items:{
      vanilla: 45,
      chocolate: 50,
      lemon: 35,
      orange: 40,
      strawberry: 60,
    },
    scoops:[],
    totalPrice:0,
  };
  
  appscoop = (scoop) =>{
    const {scoops , items } = this.state;
    const workingScoop = [...scoops];
    workingScoop.push(scoop);


    this.setState({
      scoops:  workingScoop,
      totalPrice: items[scoop]
    })
  };

  render() {
    const { items ,totalPrice} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <Icecream />
          </div>
          <div className="col-md-6 align-self-center">
          <Builder items={items} price={totalPrice} />
          </div>
        </div>
      </div>
    )
  }
}
   