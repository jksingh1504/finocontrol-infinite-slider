import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Slides from "./Slides";

const App = () => {
  const [transition, setTransition] = useState(true);
  const [translate, setTranslate] = useState(0);

  const handleTransitionEnd = useCallback(() => {
    setTransition(false);
    setTranslate(0);
    setSlides((prev) => {
      prev.shift();
      prev.push(prev[0]);
      return prev;
    });
    setTimeout(() => {
      setTransition(true);
    }, 100);
  }, []);

  const [slides, setSlides] = useState([11, 22, 33, 11]);

  const handleNext = () => {
    setTranslate(1);
  };

  return (
    <>
      <div onClick={handleNext} className="App">
        {slides.map((ele, indx) => (
          <Slides
            indx={indx}
            slides={slides}
            translate={translate}
            transition={transition}
            key={indx}
            handleTransitionEnd={handleTransitionEnd}
          />
        ))}
      </div>
    </>
  );
};

export default App;
