import React, { useEffect, useState } from "react";
import noImage from "../../public/images/No-Image-Placeholder.png";
import { Homepagelistcard } from "../features/cards/Homepagecards";

export function List({ scores }) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    console.log(scores);
  }, []);

  const numCardsPerList = 5;

  const handlePrevClick = () => {
    setStartIndex(Math.max(0, startIndex - numCardsPerList));
  };

  const handleNextClick = () => {
    setStartIndex(
      Math.min(scores.length - numCardsPerList, startIndex + numCardsPerList)
    );
  };

  return (
    <div className="foryou-homepage-container row my-5">
      <button onClick={handlePrevClick} disabled={startIndex === 0} className="col-1">
        Previous
      </button>

      {scores.slice(startIndex, startIndex + numCardsPerList).map((score) => (
        <div key={score.id} className="col-2">
          <Homepagelistcard score={score} />
        </div>
      ))}
      <button
        onClick={handleNextClick}
        disabled={startIndex >= scores.length - numCardsPerList}
        className="col-1"
      >
        Next
      </button>
    </div>
  );
}
