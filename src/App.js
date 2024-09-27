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
      <header className="App-header1">
        <h1>Welcome to FlinkDink</h1>
        <button className="home-button" onClick={handleGoHome}>
          Home
        </button>
      </header>
      <main className="App-header">
        {showSlideshow ? (
          <>
            <Slideshow term={currentTerm} week={currentWeek} onComplete={handleCompleteWeek} />
          </>
        ) : (
          <>
            {[1, 2, 3, 4].map((term) => (
              <div key={term}>
                <h2 className="terms">Term {term}</h2>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((week) => (
                  <button
                    className="homebs"
                    key={week}
                    onClick={() => handleShowSlideshow(term, week)}>
                    Go to Week {week} {completedWeeks[`${term}-${week}`] && "✓"}
                  </button>
                ))}
              </div>
            ))}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
