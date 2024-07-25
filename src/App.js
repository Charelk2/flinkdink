import React, { useState } from "react";
import Slideshow from "./components/Slideshow";
import "./styles/App.css";

function App() {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(null);
  const [currentTerm, setCurrentTerm] = useState(null);
  const [completedWeeks, setCompletedWeeks] = useState({});

  const handleShowSlideshow = (term, week) => {
    setCurrentTerm(term);
    setCurrentWeek(week);
    setShowSlideshow(true);
  };

  const handleGoHome = () => {
    setShowSlideshow(false);
    setCurrentTerm(null);
    setCurrentWeek(null);
  };

  const handleCompleteWeek = (term, week) => {
    setCompletedWeeks((prev) => ({ ...prev, [`${term}-${week}`]: true }));
    handleGoHome();
  };

  return (
    <div className="App">
      <header className="App-header">
        {showSlideshow ? (
          <>
            <button className="home-button" onClick={handleGoHome}>
              Home
            </button>
            <Slideshow term={currentTerm} week={currentWeek} onComplete={handleCompleteWeek} />
          </>
        ) : (
          <>
            <h1>Welcome to FlinkDink</h1>
            {[1, 2, 3, 4].map((term) => (
              <div key={term}>
                <h2>Term {term}</h2>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((week) => (
                  <button key={week} onClick={() => handleShowSlideshow(term, week)}>
                    Go to Week {week} {completedWeeks[`${term}-${week}`] && "✓"}
                  </button>
                ))}
              </div>
            ))}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
