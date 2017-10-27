import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCard: false
    }
    this.showCardDisplay = this.showCardDisplay.bind(this);
  }
  showCardDisplay() {
    this.setState({
      showCard: true
    })
  }
  render() {
    return (

      <div className="col-sm-6 col-md-4 col-lg-4">
        <div className="card" onClick={this.showCardDisplay}>
          <h4 className="card-title">{}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>

    );
  }
}

export default Card;
