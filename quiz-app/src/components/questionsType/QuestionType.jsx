import React, {useContext} from 'react'
import { QuizContext } from '../../context/Quiz'

const QuestionType = ({typeText}) => {

    const [quizState, dispatch] = useContext(QuizContext);

    function handleClick(text) {
        console.log(text)
        dispatch({
            type: "CHOSING_LANGUAGE",
            payload:{linguagem: text}
        })
    }
    
  return (
    <button className="globalButton" onClick={() => handleClick(typeText)}>{typeText}</button>
  )
}

export default QuestionType