import React from 'react';

export const cards = {
  "home": (props) => <HomePageCard key={props.item.product_id} {...props} />,
  "anotherExample": (props) => <AnotherCard key={props.item.product_id} {...props} />,
};






const HomePageCard = ({item, openModal}) => (
  <div onClick={openModal}>
    <Image {...item.image} />
    <ProductName name={item.product_name} />
    <ProductPrice currency={item.currency} price={item.price}/>
  </div>
);

const AnotherCard = ({item}) => (
  <div>
    <Image {...item.image} />
    <ProductName name={item.product_name} />
  </div>
);

const Image = ({link, alt}) =>
  <img className="card-image" src={link} alt={alt} />;

const ProductName = ({name}) =>
  <p className="card-product-name">{name}</p>;
  

const ProductPrice = ({currency, price}) =>
  <p className="card-price">{`${price} ${currency}`}</p>