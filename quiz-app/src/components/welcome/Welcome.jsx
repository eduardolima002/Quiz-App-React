import { useContext } from 'react'
import { QuizContext } from '../../context/Quiz'
import {WelcomeContainer} from './styled'

import QuizImage from '../../img/quiz.svg'

export default function Welcome() {

  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);


  return (
      <WelcomeContainer>
          <h3>Seja bem vindo!!</h3>
          <p>Clique no botão abaixo para começar</p>
          <button className="globalButton" onClick={() => dispatch({type: "INITING"})}>Iniciar</button>
          <img src={QuizImage} alt="background Image" />
      </WelcomeContainer>
  )
}
