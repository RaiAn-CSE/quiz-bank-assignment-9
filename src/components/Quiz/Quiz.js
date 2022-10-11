import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quizTopic }) => {
    const { id, logo, name, total } = quizTopic;
    return (
        <div className='quiz-topics'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='topic-name'>
                <p>{name}</p>
                <p>Questions: {total}</p>
                <Link to={`/quiz/${id}`}><button>Let's Start</button></Link>
            </div>
        </div>
    );
};

export default Quiz;