import React from 'react';

import './ProductModal.css';

export default ({item, show, close}) => (
  <div className={`product-modal ${show ? "show" : "hide"}`} >
    <p>{item.product_name}</p>
    <button onClick={close}>Close</button>

  </div>
);