import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './details.styles';

const Details = ({ collectionItem }) => {
  console.log(collectionItem);
  return (
    <div className="collection-page">
      <h2 className="title">ITEM PAGE</h2>
    </div>
  );
};
 
const mapStateTopProps = (state, ownProps) => ({
  collectionItem: selectCollectionItem(ownProps.match.params.itemId)(state)
});

export default connect(
  null,
  mapStateTopProps
)(Details);