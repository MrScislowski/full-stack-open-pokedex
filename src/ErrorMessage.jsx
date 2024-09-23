import PropTypes from "prop-types";

import React from "react";

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
);

ErrorMessage.propTypes = {
  error: PropTypes.object,
};

export default ErrorMessage;
