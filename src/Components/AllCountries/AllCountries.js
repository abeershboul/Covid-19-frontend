import React, { Component } from 'react';
import CovidCards from '../CovidCards/CovidCards.js'
import axios from "axios";

class AllCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStatistics: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then((result) => {
        console.log(result.data.Countries)
        return this.setState({
          allStatistics: result.data.Countries,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  addToMyRecords = (record) => {
    axios
    .post(`http://127.0.0.1:8000/api/v1/record/`,
    {
      recordId: record.ID,
      Country: record.Country,
      Date: record.Date
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.error(err);
    });
  }

    render() {   
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h6 style={{ margin: 15, alignSelf: 'center' }}>Covid19 Statistics for All Countries</h6>

        <CovidCards cards={this.state.allStatistics} btn="Add To My Records" buttonAction={this.addToMyRecords}></CovidCards>
      </div>
    )
    }
}

export default AllCountries;