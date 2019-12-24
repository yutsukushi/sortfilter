import React, { Component } from 'react';
import moment from "moment"
import Navbar from "../components/Navbar";
import Card from "../components/Card"
// import { Button } from "react-bootstrap"
import { List, ListItem } from "../components/List";
import './style.css';

class SortList extends Component {
    constructor() {
        super();
        this.state = {
            Products: [],
            sortedList: []
        }
        this.sortFilter = this.sortFilter.bind(this);
        // this.displayFour = this.displayFour.bind(this);
    }

    // fetch data function
    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5df3db952c714135cda0c932')
        .then(function(res) {
            return res.json();
        }).then(data => {
            this.setState({Products: data});
            console.log("state", this.state.Products)
        })
    }

    // View List button event handler that greets user in console.log
    handleView() {
        console.log("hello")
    }

    // function displaying four product entries per card to minimize awkward card sizes
    // displayFour() {
    //     let epartsProduct = this.state.Products;
    //     for (let i = 0; i < 3; i++) {
    //         return <p key={epartsProduct.ProductID}>{epartsProduct.ProductNumber}</p>
    //     }
    // }

    sortFilter(e) {
        // Credit to: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript

        let value = e.target.value;
        let productsArr = this.state.Products;

        productsArr.sort((a,b) => {
            let nameOne = a.Name.toLowerCase();
           let nameTwo = b.Name.toLowerCase();
        // if form inputs === "ascend" or "descend", sort renders appropriately
           if (value === "ascend") {
                return (nameOne < nameTwo) ? -1 : (nameOne > nameTwo) ? 1 : 0;
           } else if (value === "descend") {
               return (nameOne < nameTwo) ? 1 : (nameOne > nameTwo) ? -1 : 0;
           } else {
               return productsArr;
           }
        })
        // storing my hard work somewhere to be remembered
        this.setState({sortedList: productsArr })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header">
                            <Navbar
                            onChange={this.sortFilter}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                        <List>
                            {this.state.Products.map(card => (
                                <ListItem
                                key={card.ListID}>
                                    <Card
                                    name={card.Name}
                                    createdate={moment(card.CreatedDate).format("MM/DD/YYYY")}
                                    products={card.Products.map(epartsProduct => (
                                    <p key={epartsProduct.LineNumber}>{epartsProduct.ProductNumber}
                                    </p> 
                                    ))}
                                    total={card.Total}
                                    items={card.TotalItems}
                                    Button={() => (
                                        <div className="button">
                                            <button
                                                data-id={card.ListID}
                                                onClick={(event) => this.handleView(event)}
                                            >
                                                View List
                                            </button>
                                        </div>
                                    )} 
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
        )
    }
}

export default SortList;