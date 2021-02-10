import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner animation='border' role='status' style={styles}>
      <span>Loading...</span>
    </Spinner>
  );
};

const styles = {
  width: '100px',
  height: '100px',
  margin: 'auto',
  display: 'block',
};
export default Loader;
