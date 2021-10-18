import React from "react";

import './rating-demo.styles.css'

import { Details, Rating } from "../../components";

const RatingDemoPage = () => {
  return (
    <div>
      <h1>Star rating demo</h1>
      <hr />
      <div className="details__container">
        <Details title="Single rating component" open>
          <Rating stars={[1, 2, 3, 4, 5]} />
        </Details>
        <Details title="Multiple star rating component" open>
          <Rating stars={[1, 2, 3, 4, 5]} />
          <Rating stars={[1, 2, 3, 4, 5]} />
        </Details>
      </div>
    </div>
  );
};

export default RatingDemoPage;
