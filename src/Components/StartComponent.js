import './StartComponent.css';
import React from "react";

const StartComponent = ({onQuizStart}) => {
    return (
      <div className="App">
      <div className="App-back-ground">
      <div className='body-box'>
       <div className="heading"><p>Quiz App</p>
         <div className="start-box">
           <button className="start-button" onClick={onQuizStart}>START QUIZ</button>
          <p className="best">BEST OF LUCK !!!</p>
         </div>
       </div>
      </div>
      </div>
      </div>
    );
  }
 export default StartComponent;