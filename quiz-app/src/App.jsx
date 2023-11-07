import { useState, useContext, useEffect } from 'react'
import {QuizContext} from './context/Quiz'
import Questions from './components/questions/Questions'
import Welcome from './components/welcome/Welcome'
import GlobalStyle from './assets/GlobalStyles'
import GameOver from './components/gameOver/GameOver'
import QuestionType from './components/questionsType/QuestionType'
import data from './data/questions_complete'

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    dispatch({type: "REORDER_QUESTIONS"})
  },[])

  return (
    <>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "INITING" && data.map((q) => (
        <QuestionType typeText={q.category} key={q.category}/>
      ))}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver />}

      <GlobalStyle />
    </>
  )
}

export default App
