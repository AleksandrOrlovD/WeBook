import React from 'react';

import './error-indicator.scss';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <ErrorOutlineIcon style={{ fontSize: 100 }} color='error' />
      <div className="error-indicator__message">
        Error!<span>something went wrong</span>
      </div>
    </div>
  );
};

export default ErrorIndicator;
