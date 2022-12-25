import React, { Component } from 'react';
import CovidCards from '../CovidCards/CovidCards.js';
import axios from "axios";

class Records extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allRecords: [],
    };
  }

  componentDidMount = () => {
    this.getRecords()
  };

  getRecords = () => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/record/`)
      .then((result) => {
        console.log(result.data)
        return this.setState({
          allRecords: result.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteRecord = (record) => {
    axios
      .delete(`http://127.0.0.1:8000/api/v1/record/${record.id}`)
      .then((result) => {
        this.getRecords()
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {this.state.allRecords.length 
        ? (<><h6 style={{ margin: 15, alignSelf: 'center' }}>Covid19 Statistics for All Countries</h6>
              <CovidCards cards={this.state.allRecords} btn="Delete" buttonAction={this.deleteRecord}></CovidCards></>) 
        : (<h1 style={{ color: 'DeepPink', margin: 15, alignSelf: 'center' }}>No Available Records</h1>)}
      </div>
    )
  }
}

export default Records;