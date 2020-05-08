import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
// import { withRouter } from 'react-router-dom';
// import Popup from "reactjs-popup";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  // DetailsButton,
  // OptionLink,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem ,id }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
     {/* <Popup trigger={<BackgroundImage className='image' imageUrl={imageUrl} />} modal>
    {close => (
      <div className="modal">
        <div className="content">
        <NameContainer>{name}</NameContainer>
        <PriceContainer> ${price}</PriceContainer>
          <br/>
          <br/>
          <div className="header"> Product Details :</div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
         <label id="sizeLabel" prefix>Size</label>
            <select id="sizeSelect" aria-labelledby="sizeLabel">
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M" selected>M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <label id="sizeLabel" prefix>Q</label>
            <select id="sizeSelect" aria-labelledby="sizeLabel">
              <option value="XS"selected>1</option>
              <option value="S">2</option>
              <option value="M" >3</option>
              <option value="L">4</option>
              <option value="XL">5</option>
            </select>
      <button onClick={() => addItem(item)} inverted>
        Add to cart
      </button>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
          CLOSE POP UP
          </button>
        </div>
      // </div>
    )}
  </Popup> */}
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer> ${price}</PriceContainer>
      </CollectionFooterContainer>
      {/* <OptionLink to={`shop/${id}`}>
            Details
      </OptionLink> */}
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  // fetchItemById: id => dispatch(fetchItemById(id)),
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);