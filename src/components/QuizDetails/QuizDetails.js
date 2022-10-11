import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizData = useLoaderData();
    const quizDetail = quizData.data;

    const allQuiz = quizDetail.questions;
    console.log(allQuiz);


    const questionHandler = (data) => {
        const { selectedOption, id } = data;
        const matchData = allQuiz.find(e => e.id === id)
        if (matchData.correctAnswer === selectedOption) {
            alert("Right Answer")
        }
        else {
            alert("Wrong Answer")
        }
    }

    return (
        <div>
            {
                allQuiz.map(quiz => <Question
                    key={quiz.id}
                    quiz={quiz}
                    questionHandler={questionHandler}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetails;