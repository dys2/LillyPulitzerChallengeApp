import React from 'react';

import { cards } from './GridCards';
import ProductModal from './ProductModal';

import './GridLayout.css';


export default ({ title, items, cardType }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <div className="grid-layout">
      {items.map(
        item => <CardWrapper key={item.product_id} item={item} cardType={"home"} />
      )}
    </div>
  </React.Fragment>
);

class CardWrapper extends React.Component {

  state = {
    showModal: false
  }

  toggleModal = () =>
    this.setState(prev => ({
      showModal: !prev.showModal
    }));

  

  render() {
    const {item, cardType } = this.props; 
    return (
      <React.Fragment>
        {cards[cardType] ? cards[cardType]({ item, openModal: this.toggleModal }) : cards["home"]({ item, openModal: this.toggleModal })}
        {<ProductModal show={this.state.showModal} item={item} close={this.toggleModal}/>}
      </React.Fragment>
    );
  }
}
