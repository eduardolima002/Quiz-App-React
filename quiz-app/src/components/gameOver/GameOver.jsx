import React, { useContext } from 'react'

import wellDone from '../../img/welldone.svg'
import { GameOver_container } from './styled'
import { QuizContext } from '../../context/Quiz'

const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <GameOver_container>
        <h2>Fim de jogo</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={wellDone} alt="imagem game over" />
        <button className='globalButton' onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </GameOver_container>
  )
}

export default GameOver