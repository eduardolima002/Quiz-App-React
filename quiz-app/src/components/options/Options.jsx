import React, { useContext } from 'react'
import { QuizContext } from '../../context/Quiz'
import style from './Options.module.css'

const Options = ({option, answer, selectOption}) => {

    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={`${style.option} ${quizState.answerSelected && option === answer ? style.correct : (quizState.answerSelected && option !== answer) ? style.wrong : ""}`} onClick={() => selectOption()}>
      <div>
        <p>{option}</p>
      </div>
    </div>
  )
}

export default Options