import { useState,useEffect, Fragment} from "react";
import StartComponent from "./Components/StartComponent";
import EndComponent from "./Components/EndComponent";
import ScreenComponent from "./Components/ScreenComponent";
import data from "./Data/Data.json";
import {useCookies}from "react-cookie";

const flattenScreenData = Object.entries(data.screen_data);


const App=()=> {
  const [screen,setScreen] = useState(0);
  const [activeScreen,setActiveScreen] = useState(0);
  const [activescreen_score,setActivescreen_score]= useState(0);

  const quizStartHandler=(event)=>{
    event.preventDefault();
    setScreen(1);
  }

  const quizEndHandler=(event)=>{
    event.preventDefault();
    alert(`You scored ${activescreen_score } marks !!!`)
    setScreen(0);
    setActiveScreen(0);
    setActivescreen_score(0);
  }

const screenElem = <ScreenComponent
        data={flattenScreenData[activeScreen]}
        activeScreen={activeScreen}
        activescreen_score={activescreen_score}
        setActiveScreen={setActiveScreen}
        setActivescreen_score={setActivescreen_score}
        setScreen={setScreen}
    />;

  return (
    <Fragment>
     { screen===0 && <StartComponent onQuizStart={quizStartHandler}/>}
     {screen===1 && <div>{screenElem}</div>}
     { screen===2 && <EndComponent onQuizEnd={quizEndHandler}/>}
    </Fragment>
  )
}

export default App;
