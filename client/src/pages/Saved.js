// import react and jumbotron
import React, { Component } from "react";
import Jumbotron from "../Jumbotron";

// saved books
class Saved extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Jumbotron />
                <h3>Saved Books Page</h3> 
            </div>
        )
    }
}

export default Saved;