// import App from '../App';
// import AppReducer from '../data/AppReducer';
// import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import React from 'react';
import { useContext } from 'react';
import AppContext from '../data/AppContext';

const FlexContainer = ({element}) => {
  const context = useContext(AppContext);
  const items = context.items;
  return (
      <Container>
        <div className="d-flex flex-wrap justify-content-start">
          {items.map((item) => (
            <div key={item.id} className="p-2" style={{ flex: '1 1 calc(25% - 1rem)', maxWidth: 'calc(25% - 1rem)' }}>
              {React.createElement(element, { ...item })}
            </div>
          ))}
        </div>
      </Container>
    );
  };

  FlexContainer.propTypes = {
    element: PropTypes.elementType.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  export default FlexContainer;