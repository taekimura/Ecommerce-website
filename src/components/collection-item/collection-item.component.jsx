import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { addItem } from '../../redux/cart/cart.actions';


import {
  // DetailsButton,
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  // OptionLink,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem ,itemType }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer> ${price}</PriceContainer>
      </CollectionFooterContainer>
      {/* <DetailsButton
        onClick={() => {
          history.push('/about');
        }}
      >Details</DetailsButton> */}
      {/* <OptionLink to={`shop/${itemType}`}>
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