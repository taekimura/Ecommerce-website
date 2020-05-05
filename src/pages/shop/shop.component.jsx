import React , { useEffect } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import DetailsPage from '../details/details.component';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

const ShopPage =({fetchCollectionsStart,match}) =>{
   useEffect(()=>{
       fetchCollectionsStart();
   },[fetchCollectionsStart]);
    return(
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverviewContainer}
            />
            <Route 
                path ={`${match.path}/:collectionId`}
                component = {CollectionPageContainer}
            />
            
            <Route
                path={`${match.path}/:collectionId/:itemId`}
                component={DetailsPage}
            />
        </div>
    );  
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
 
export default connect(
null, 
mapDispatchToProps
)(ShopPage);