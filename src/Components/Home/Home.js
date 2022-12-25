import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidCards from '../CovidCards/CovidCards.js'
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalStatistics: [],
      cards: [],
      formCountry:'',
      formStartDate:'',
      formEndDate:''
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://api.covid19api.com/world/total`)
      .then((result) => {
        return this.setState({
          totalStatistics: result.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getStatisticsForCountry = (event) => {
    event.preventDefault();
    axios.get(`https://api.covid19api.com/country/${this.state.formCountry}/status/confirmed?from=${this.state.formStartDate}&to=${this.state.formEndDate}`)
      .then((result) => {
        console.log(result.data)
        return this.setState({
          cards: result.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h6 style={{ margin: 15, alignSelf: 'center' }}>World Total Statistics</h6>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <h6 style={{ backgroundColor: "DeepPink", padding: 15, color: "white" }}>Total Confirmed: {this.state.totalStatistics.TotalConfirmed}</h6>
          <h6 style={{ backgroundColor: "DeepPink", padding: 15, color: "white" }}>Total Deaths: {this.state.totalStatistics.TotalDeaths}</h6>
          <h6 style={{ backgroundColor: "DeepPink", padding: 15, color: "white" }}>Total Recovered: {this.state.totalStatistics.TotalRecovered}</h6>
        </div>

        <h6 style={{ margin: 15, alignSelf: 'center' }}>Get Statistics For a Specific Country</h6>

        <Form style={{ alignSelf: 'center' }} onSubmit={this.getStatisticsForCountry}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Control type="text" placeholder="Country" 
                onChange={(event)=>this.setState({'formCountry':event.target.value})}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control type="date" placeholder="Start Date" 
                  onChange={(event)=>this.setState({'formStartDate':event.target.value})}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control type="date" placeholder="End Date" 
                  onChange={(event)=>this.setState({'formEndDate':event.target.value})}/>
            </Form.Group>
            <Button type="submit" onClick={this.getStatisticsForCountry} as={Col} style={{ backgroundColor: 'RoyalBlue' }}>SEARCH</Button>
          </Row>
        </Form>

        {this.state.cards.length ? (<CovidCards cards={this.state.cards} ></CovidCards>) : null}
      </div>
    )
  }
}
export default Home;