import React from 'react';

const Question = ({ question }) => {
    // console.log(question);
    return (
        <div>
            <div>
                <p className='fw-bolder'>{question.question}</p>
            </div>
            <p>{question.options[0]}</p>
            <p>{question.options[1]}</p>
            <p>{question.options[2]}</p>
            <p>{question.options[3]}</p>
            <div>

            </div>
        </div>
    );
};

export default Question;