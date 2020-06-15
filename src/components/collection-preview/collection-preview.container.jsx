import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionPreview from "./collection-preview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsPreviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPreview);

export default CollectionsPreviewContainer;
