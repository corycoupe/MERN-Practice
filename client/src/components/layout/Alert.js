// This entire component is made to fetch the alert state (the array)
import React from 'react';
import PropTypes from 'prop-types';
//Whenever you want to interact a component with redux, whether calling an action or getting the state use connect
import { connect } from 'react-redux';

// would normally be props.alerts but destructured it
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  // This is very much like mapping components done in Brainstation. Like Final project
  alerts.map((alert) => (
    // alert-${alert.alertType} will show up as alert-danger or whatever the alertType is.
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  // grabs the state from the alert reducer (Specifically grabs it from the index.js in reducers which combines all
  //reducers)

  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
