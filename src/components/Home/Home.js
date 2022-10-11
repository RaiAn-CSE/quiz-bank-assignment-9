import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const loadData = useLoaderData();
    const quizTopics = loadData.data;
    // console.log(quizTopics);
    return (
        <div className='home-container'>
            <div>
                <h2>Learning Courses Online</h2>
                <p>That Quiz is a website featuring multiple-choice, matching, and short-answer tests on a variety of core subjects. Most of its content is math-oriented, with quizzes on arithmetic to calculus, but it also includes tests on science, geography, and four languages.</p>
            </div>
            <div className='quiz-container'>
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