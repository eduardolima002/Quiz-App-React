import React from 'react'
import { useContext } from 'react'
import {Questions_Container} from "./styled"
import { QuizContext } from '../../context/Quiz'
import Options from '../options/Options'

const Questions = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];



  function onSelectedOption(option){
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option}
    })
  }

  return (
    <Questions_Container>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div className='options_container'>
            {currentQuestion.options.map((option) => (
              <Options option={option}
               key={option}
               answer={currentQuestion.answer}
               selectOption={() => onSelectedOption(option)}
               />
            ))}
        </div>
        {quizState.answerSelected && (<button className="globalButton" onClick={() => dispatch({type: "NEXT_QUESTION"})}>Continuar</button>)}
        
    </Questions_Container>
  )
}

export default Questions