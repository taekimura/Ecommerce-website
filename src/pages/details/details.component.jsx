// import React from 'react';
// import { connect } from 'react-redux';

// import Details from '../../components/details/details.component';
// import Footer from '../../components/footer/footer.component';

// import { selectCollection } from '../../redux/shop/shop.selectors';

// import {
//   CollectionPageContainer,
//   CollectionItemsContainer
// } from './details.styles';

// const DetailsPage = () => {
// //   const { items } = collection;
//   return (
//     <CollectionPageContainer>
//       <CollectionItemsContainer>
//       <Details/>
//       </CollectionItemsContainer>
//       <Footer/>
//     </CollectionPageContainer>
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

// export default connect(mapStateToProps)(DetailsPage);