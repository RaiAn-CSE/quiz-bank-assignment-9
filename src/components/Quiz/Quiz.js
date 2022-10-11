import React from 'react';
import './Quiz.css'

const Quiz = ({ quizTopic }) => {
    const { logo, name, total } = quizTopic;
    return (
        <div className='quiz-topics'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='topic-name'>
                <p>{name}</p>
                <p>Questions: {total}</p>
                <button>Let's Start</button>
            </div>
        </div>
    );
};

export default Quiz;