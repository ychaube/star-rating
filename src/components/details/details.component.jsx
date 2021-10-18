import React from "react";

import './details.styles.css'

const Details = ({open, title, children}) => {
  return (
    <details className="details__container" open={open}>
      <summary className="details__title">{title}</summary>
      <div className="details__content__container">
          {children}
      </div>
    </details>
  );
};

export default Details;
