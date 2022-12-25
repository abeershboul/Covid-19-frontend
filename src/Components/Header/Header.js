import React, { Component } from 'react';
import { Navbar, NavItem, PageHeader } from 'react-bootstrap';
// import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div style={{
                color: "white",
                backgroundColor: "RoyalBlue",
                padding: "20px",
                margin: "0px",
                textAlign: 'center'
            }}>
                <h1 style={{color:'black'}}>Covid 19</h1>
                <h3 style={{ margin:"35px"}}>Covid19 Statistics</h3>
                <h6>A website to provide you with all the updates on Covid-19 statistics around the world</h6>
            </div >
        );
    }
}

export default Header;