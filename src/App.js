//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const touchdownHome  = e => {
    setHomeScore(homeScore + 7);
  }
  const fgHome = e => {
    setHomeScore(homeScore + 1);
  }
  const touchdownAway  = e => {
    setAwayScore(awayScore + 7);
  }
  const fgAway = e => {
    setAwayScore(awayScore + 1);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={touchdownHome}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={fgHome}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={touchdownAway}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={fgAway}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
