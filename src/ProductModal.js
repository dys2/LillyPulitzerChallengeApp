import React from 'react';
// import axios from 'axios';

import './ProductModal.css';

export default ({ item, show, close }) => (
  <div className={`product-modal ${show ? "show" : "hide"}`} >
    <p>{item.product_name}</p>
    <button onClick={close}>Close</button>
  </div>
);

// export default class extends React.Component {
//   state = {
//     variations: {}
//   }
//   async componentDidMount() {
//     // call to get more specific product details
//     const product = await axios.get(`https://dev.lillypulitzer.com/s/lillypulitzer-us/dw/shop/v18_2/products/${this.props.item.product_id}/variations?client_id=7469c353-e112-4902-bf40-ead35df41219`);
//     this.setState({
//       variations: res.data
//     })
//   }

//   render() {
//     return (
//       <div className={`product-modal ${this.props.show ? "show" : "hide"}`} >
//         <p>{this.props.item.product_name}</p>
//         <button onClick={this.props.close}>Close</button>
//         <p>{this.state.variations.short_description}</p>
//       </div>
//     )
//   }
// }