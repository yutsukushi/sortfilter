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
            sortedList: [],
            // displayFive: []
        }
        this.sortFilter = this.sortFilter.bind(this);
        this.displayFive = this.displayFive.bind(this);
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

    // function displaying five product entries per card to minimize awkward card sizes
    
        // iterate through each object
        // with each object, loop through products
        // and list every product in object/render on DOM
        // console.log("products", products)

        displayFive() {
            let products = this.state.Products;
            products.forEach(function(products) {
                
                for (let i = 0, len = Math.min(4, products.Products.length); i < len; i++) {
                // https://stackoverflow.com/questions/43295840/javascript-how-to-start-foreach-loop-at-some-index

                // console.log("products.length",products.Products.length)
                // console.log("products.linenumber", products.Products[i].LineNumber)
                // console.log("products.productNumber", products.Products[i].ProductNumber)
                    return (
                        <p key={products.Products[i].LineNumber}>{products.Products[i].ProductNumber}</p>
                    )
                }
            })
            // -------------------------------------------------
            // return (
            //     <ul>
            //         {card.Products.map(function(products) {
            //             return <li key={products.LineNumber}>{products.ProductNumber}></li>
            //         })}
            //     </ul>
            // )
            // ------------------------------------------------
            // card.Products.forEach(function (products) {
                // console.log("products", products);
                    // return (
                    // <ul></ul><p key={products.LineNumber}>{products.ProductNumber}</p>)
                    // console.log("for each product", products);
               
                // if (products === undefined) {
                //     return <p></p>
                // } else {
                // // console.log("displayFive", fiveProducts[i].Products[i].ProductID);
                //     return <p key={products.ProductID}>{products}</p>
                // }
            // }) 
        // })
        }     

    sortFilter(e) {
        // Credit to: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript

        let value = e.target.value;
        let productsArr = this.state.Products;

        productsArr.sort((a,b) => {
            let nameOne = a.Name.toLowerCase();
           let nameTwo = b.Name.toLowerCase();
        // if form inputs === "ascend" or "descend", sort renders appropriately
           if (value === "ascend") {
               if (nameOne < nameTwo) {
                   return -1
               } else if (nameOne > nameTwo) {
                   return 1
               } else {
                   return 0
               }
                // return (nameOne < nameTwo) ? -1 : (nameOne > nameTwo) ? 1 : 0;
           } else if (value === "descend") {
               if (nameOne < nameTwo) {
                   return 1
               } else if (nameOne > nameTwo) {
                   return -1
               } else {
                   return 0
               }
            //    return (nameOne < nameTwo) ? 1 : (nameOne > nameTwo) ? -1 : 0;
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
                                    products={card.Products.slice(0,5).map(
                                            epartsProduct => {
                                            return <p key={epartsProduct.LineNumber}>{epartsProduct.ProductNumber}</p>
                                        })
                                    }
                                    // {this.displayFive()}

                                    // function(epartsProduct) {
                                    // for (let i = 0, len = Math.min(4, epartsProduct.length); i < len; i++) {
                                        
                                    //     }
                                    //     return <p></p> 
                                    // })
                                    
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