import React, { useState } from "react";

import Star from "../star/star.component";

import "./rating.styles.css";

const Rating = ({ stars }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  const handleOnStarHover = (index) => {
    setHoveredStar(index);
  };

  return (
    <div className="rating__container">
      <div className="rating__stars">
        {stars.map((star, i) => (
          <Star
            key={i}
            id={i}
            hoveredStar={hoveredStar}
            setHoveredStar={handleOnStarHover}
            selectedStar={selectedStar}
            setSelectedStar={setSelectedStar}
          />
        ))}
      </div>
      <h3>You've selected {selectedStar + 1} stars</h3>
    </div>
  );
};

export default Rating;
