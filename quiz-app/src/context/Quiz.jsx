import { createContext, useReducer } from "react";

import questions from '../data/questions'
import data from '../data/questions_complete'

const STAGES = ["Start", "Playing", "End", "INITING"];

const InitialState = {
    gameStage: STAGES[0],
    questions: [],
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case "INITING":
            return {
                ...state,
                gameStage: STAGES[3] 
            }

        case "CHOSING_LANGUAGE":
            const newQuestions = data.filter((questions) => {
                return questions.category === action.payload.linguagem;
            });
            console.log(newQuestions[0].questions)
            return {
                ...state,
                questions: newQuestions[0].questions,
                gameStage: "Playing"
            }


        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorderedQuestions
            };

        case "NEXT_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;
            if (!questions[nextQuestion]) {
                endGame = true;
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false
            }

        case "NEW_GAME":
            return InitialState;

        case "CHECK_ANSWER":

            if (state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if (answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option

            }

        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, InitialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}