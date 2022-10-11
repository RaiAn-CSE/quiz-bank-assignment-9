import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const loadData = useLoaderData();
    const quizTopics = loadData.data;
    console.log(quizTopics);
    return (
        <div className='home-container'>
            <div>
                <h2>Raian : {quizTopics.length}</h2>
            </div>
            <div>
                {
                    quizTopics.map(quizTopic => <Quiz
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;