import React, { Component } from "react";
import Icecream from "../../components/IceCream/IceCream";
import Builder from "../../components/Builder/Builder";

export default class IceCreamBuilder extends Component {
  state = {
    items: {},
    scoops: [],
    totalPrice: 0,
  };

  componentDidMount() {
    fetch("https://ice-cream-92923-default-rtdb.firebaseio.com/Items.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData,
        });
      });
  }

  addscoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoop = [...scoops];
    workingScoop.push(scoop);

    this.setState((prevState) => {
      return {
        scoops: workingScoop,
        totalPrice: prevState.totalPrice + items[scoop],
      };
    });
  };

  removescoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoop = [...scoops];
    const scoopIndex = workingScoop.findIndex((sc) => sc === scoop);
    workingScoop.splice(scoopIndex, 1);

    this.setState((prevState) => {
      return {
        scoops: workingScoop,
        totalPrice: prevState.totalPrice - items[scoop],
      };
    });
  };

  render() {
    const { items, totalPrice, scoops } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Icecream scoops={scoops} />
          </div>
          <div className="col-md-6 align-self-center">
            <Builder
              items={items}
              price={totalPrice}
              add={this.addscoop}
              remove={this.removescoop}
              scoops={scoops}
            />
          </div>
        </div>
      </div>
    );
  }
}
