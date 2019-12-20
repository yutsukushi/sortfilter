import React, { Component } from 'react';
// import moment from "moment"
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
            sort: ""
        }
    }

    // fetch data function
    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5df3db952c714135cda0c932')
        .then(function(res) {
            return res.json();
        }).then(data => {
            this.setState({Products: data});
            console.log("state", this.state.Products);
        })
    }

    // handleView(event) {
    //     console.log("hello")
    // }

    sortFilter(e) {
        let option = e.target.value;
        let cardNames = this.state.Products;
        let sortedList = cardNames.sort((a, b) => {
           let nameOne = a.Name.toLowerCase();
           let nameTwo = b.Name.toLowerCase();

        // if ($(".dropdown-item")=="aToZ") {
           if (option === "ascend") {

            if (nameOne < nameTwo) {
               return -1;
           } else if (nameOne > nameTwo) {
               return 1;
           }

           return 0;

        //    https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript

        } else if (option === "descend") {
            
            if (nameOne < nameTwo) {
                return -1;
            } else if (nameOne > nameTwo) {
                return 1;
            }
 
            return 0;
 
        }})
        
        this.setState({Products: sortedList })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header">
                            <Navbar sort={this.state.sort}
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
                                        createdate={card.CreatedDate}
                                        products={card.Products.map(epartsProduct => (
                                            <p 
                                            key={epartsProduct.ProductID}>{epartsProduct.ProductNumber}</p> 
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