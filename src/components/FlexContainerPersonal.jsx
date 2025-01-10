import React, { useContext } from "react";
import AppContext from "../data/AppContext";
import PropTypes from "prop-types";

function FlexContainerPersonal({ element }) {
  const context = useContext(AppContext);
  const state = context.items;

  return (
    <div className="d-flex justify-content-center flex-wrap mt-3">
      {state.map((e) => (
        <div key={e.id}>
          {/* {element({ ...e })} */}
          {React.createElement(element, { ...e })}
        </div>
      ))}
    </div>
  );
}

FlexContainerPersonal.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default FlexContainerPersonal;