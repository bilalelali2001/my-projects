
import React , {useContext} from 'react';
import {QuizContext} from "../Helpers/Contexts";
import "../App.css";
import {Question} from "../Helpers/QuestionBank";

function EndScreen() {
  const { score , setScore, setGameState} = useContext(QuizContext);
  const restartQuiz = ()=>{
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className='EndScreen'>

      <h1>

        Quiz Finished
      </h1>
      <h3> {score} / {Question.length}</h3>
      <button onClick={restartQuiz}> restart quiz</button>
    </div>
  )
}

export default EndScreen