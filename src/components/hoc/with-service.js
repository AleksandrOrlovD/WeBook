import React from 'react';
import { WebookServiceConsumer } from '../webook-service-context/webook-service-context';

const withService = () => (Component) => {
  return (props) => {
    return (
      <WebookServiceConsumer>
        {(service) => <Component {...props} service={service} />}
      </WebookServiceConsumer>
    );
  };
};

export default withService;
