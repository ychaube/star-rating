import React from "react";

import "./star.styles.css";

const Star = ({
  height = "45px",
  width = "45px",
  id,
  hoveredStar,
  setHoveredStar,
  selectedStar,
  setSelectedStar
}) => {
  let styleClass = "star__rating star__rating--blank";

  if (id <= hoveredStar || id <= selectedStar) {
    styleClass = "star__rating star__rating--filled";
  }

  const handleOnMouseEnter = (starID) => {
    setHoveredStar(starID);
  };

  const handleOnClick = () => {
    setSelectedStar(id);
  }

  return (
    <div
      onMouseEnter={handleOnMouseEnter.bind(this, id)}
      onMouseLeave={handleOnMouseEnter.bind(this, 0)}
      onClick={handleOnClick}
    >
      <svg
        height={height}
        width={width}
        viewBox="0 0 25 25"
        className={styleClass}
        data-rating={id}
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

export default Star;
