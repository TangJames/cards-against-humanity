import React, { Component } from 'react';
import './AddNewCard.css';

import { database } from '../utils/firebase.js';

class AddNewCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardTitle: ''
    };
    this.updateCardTitle = this.updateCardTitle.bind(this);
    this.postThatStuff = this.postThatStuff.bind(this);
  }

  updateCardTitle(e) {
    this.setState({
      cardTitle: this.cardTitleInput.value
    });
    console.log(this.cardTitleInput.value);
  }

  postThatStuff(e) {
    database.ref('/cards')
    .push({
      cardTitle: this.state.cardTitle
    })
    .then(() => {
      // clear out the form
      console.log(`successfully saved ${this.state.cardTitle} to firebase!`);
      this.setState({
        cardTitle: ''
      });
    })
    .catch((error)=> {
      console.log(error);
    })
  }
  render() {
    return (
      <div className='AddNewCard'>

        <section className='container-fluid'>
          <div className='row'>

            <form name='add-card' id='add-card' onSubmit={this.postThatStuff}>
              <input type='text' ref={(cardInput)=> this.cardTitleInput = cardInput} onChange={this.updateCardTitle} placeholder='What is your question?' />
            </form>

            <br />



            <div className='card'>
              <h4 className='card-title'>A preview appears here as you type...</h4>
              <h6>Cards Against Assembly</h6>
            </div>
          </div>
        </section>

      </div>
    );
  }


}

export default AddNewCard;

