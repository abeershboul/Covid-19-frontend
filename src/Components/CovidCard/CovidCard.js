import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

import React, { Component } from 'react';

class CovidCard extends Component {
    render() {
        console.log("card")
        console.log(this.props)
        return (
            <Card style={{borderRadius:0, boxShadow: "1px 2px 4px 1px silver", width: '18rem', borderLeft: "10px solid DeepPink", borderRight: "light", margin: 10 }}>
                <Card.Body style={{ textAlign: 'center' }}>
                    {this.props.card.Country ? (<Card.Title style={{ color: 'DeepPink' }}> Country: {this.props.card.Country} </Card.Title>) : (<Card.Title style={{ color: 'DeepPink' }}> Date: {this.props.card.Date} </Card.Title>)}
                    {this.props.card.Cases >=0 ? (<Card.Text>Total Confirmed Cases: {this.props.card.Cases}</Card.Text>) : null}
                    {this.props.card.TotalConfirmed>=0 ? (<Card.Text>Total Confirmed Cases: {this.props.card.TotalConfirmed}</Card.Text>) : null}
                    {this.props.card.TotalDeaths>=0 ? (<Card.Text>Total Deaths Cases: {this.props.card.TotalDeaths}</Card.Text>) : null}
                    {this.props.card.TotalRecovered>=0 ? (<Card.Text>Total Recovered Cases: {this.props.card.TotalRecovered}</Card.Text>) : null}
                    {this.props.card.Country ? (<Card.Text> Date: {this.props.card.Date} </Card.Text>) : null}
                    <hr style={{ borderTop: "1px dashed black" }} />
                    {this.props.btn?(<Button onClick={()=>this.props.buttonAction(this.props.card)}
                                        variant="primary" 
                                        style={{ backgroundColor: 'RoyalBlue' }} >
                                        {this.props.btn}
                                    </Button>):null}
                </Card.Body>
            </Card>
        );
    }
}

export default CovidCard;