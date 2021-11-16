import React, { useEffect, useState } from "react";

const AutoTextEffect = () => {
  const [textArray, setTextArray] = useState([]);
  const [speed, setSpeed] = useState(1);

  const textValue = "We Love Programming!";
  let textIndex = 1;

  useEffect(() => {
    const writeText = () => {
      const text = textValue.slice(0, textIndex);
      setTextArray(text);
      textIndex++;
      if (textIndex <= textValue.length) {
        setTimeout(writeText, 300 / speed);
      } else {
        textIndex = 1;
      }
    };
    writeText();
  }, [speed, textValue, textIndex]);

  return (
    <>
      <h1>{textArray}</h1>

      <div className="speed">
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          value={speed}
          min="1"
          max="10"
          step="1"
          onChange={(e) => setSpeed(e.target.value)}
        />
      </div>
    </>
  );
};

export default AutoTextEffect;
