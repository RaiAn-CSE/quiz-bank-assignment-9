import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizData = useLoaderData();
    const quizDetail = quizData.data;

    const allQuiz = quizDetail.questions;
    // console.log(allQuiz);

    return (
        <div>
            {
                allQuiz.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetails;