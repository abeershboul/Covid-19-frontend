import React, { Component } from 'react';
import CovidCard from '../CovidCard/CovidCard';

class CovidCards extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                {this.props.cards.map(card => {
                    return (
                        <CovidCard card={card} key={card.ID || card.id || card.Date} 
                                    btn={this.props.btn ? this.props.btn : null} 
                                    buttonAction={this.props.buttonAction}/>
                    )
                })}
            </div>
        );
    }
}

export default CovidCards;