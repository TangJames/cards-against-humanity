import React, { Component } from 'react';
import Card from './Card.js';
import './CardList.css';

import { database, firebaseListToArray } from '../utils/firebase.js';

class CardList extends Component {
  constructor(props){
    super(props)

    this.state = {
      cardStrings: ['']
    }
  }

  componentWillMount() {
    database.ref('/cards')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        this.setState({
          cardStrings: results
        });
    });
  }


  render() {
    var cardComponents = this.state.cardStrings.map(cardData=>{
       return <Card key={cardData.id} url={cardData.cardTitle} />
    });

    return (
      <div className="CardList">
        <section id="cards" className="container-fluid">
          <div className="row">

            <section>
              <div className="row memes">
                {cardComponents}
              </div>
            </section>

          </div>
        </section>
      </div>
    );
  }


}


export default CardList;

