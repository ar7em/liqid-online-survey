import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { purge } from "actions/purge";
import PurgeComponent from "components/Purge";

export const Purge = (props) => (
  <PurgeComponent purge={() => {
    props.dropStorage();
  }}/>
);

Purge.propTypes = {
  dropStorage: PropTypes.func.isRequired
};

export const mapDispatchToProps = (dispatch) => ({
  dropStorage: () => dispatch(purge())
});

export default connect(null, mapDispatchToProps)(Purge);
