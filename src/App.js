//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [lionsCount,lionsSetCount]=useState(0);

  const [tigersCount,tigersCountSet]=useState(0);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

    <div className="home__score">{lionsCount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
    <div className="away__score">{tigersCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={()=>{
            lionsSetCount(lionsCount+7);
          }} className="homeButtons__touchdown">Home Touchdown</button>

          <button onClick={()=>{
            lionsSetCount(lionsCount+3)
          }} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>

        <div className="awayButtons">
          <button onClick={()=>{
            tigersCountSet(tigersCount+7)
          }} className="awayButtons__touchdown">Away Touchdown</button>

          <button onClick={()=>{
            tigersCountSet(tigersCount+3)
          }}className="awayButtons__fieldGoal">Away Field Goal</button>

        </div>

        <div className="resetButton">
          <button onClick={()=>{
            lionsSetCount(0)
            tigersCountSet(0)
          }}className="resetButton">Reset Button</button>

          
        </div>
      </section>
    </div>
  );
}

export default App;
