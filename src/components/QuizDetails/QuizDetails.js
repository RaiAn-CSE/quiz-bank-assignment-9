import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Question from '../Question/Question';


const QuizDetails = () => {
    const quizData = useLoaderData();
    const quizDetail = quizData.data;

    const allQuiz = quizDetail.questions;
    console.log(allQuiz);

    const Notify = (isCorrect) => {
        if (isCorrect) {
            toast("Right Answer")
        }
        else {
            toast("Wrong Answer")
        }
    }


    const questionHandler = (data) => {
        const { selectedOption, id } = data;
        console.log(data);
        const matchData = allQuiz.find(e => e.id === id)
        if (matchData.correctAnswer === selectedOption) {
            Notify(true);
        }
        else {
            Notify(false);
        }
    }

    return (
        <div>
            <h4>Quiz of {quizDetail.name}</h4>
            {
                allQuiz.map(quiz => <Question
                    key={quiz.id}
                    quiz={quiz}
                    questionHandler={questionHandler}
                ></Question>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;