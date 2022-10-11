import React from 'react';


const Question = ({ quiz }) => {
    // console.log(quiz);
    const { question, options } = quiz;
    return (
        <div>
            <div>
                <p className='fw-bolder'>{question}</p>
            </div>
            <p>{options[0]}</p>
            <p>{options[1]}</p>
            <p>{options[2]}</p>
            <p>{options[3]}</p>
        </div>
    );
};

export default Question;