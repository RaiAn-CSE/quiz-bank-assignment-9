import React from 'react';

const Quiz = ({ quizTopic }) => {
    const { logo, name } = quizTopic;
    return (
        <div>
            <img src={logo} alt="" />
            <p>Name : {name}</p>
        </div>
    );
};

export default Quiz;