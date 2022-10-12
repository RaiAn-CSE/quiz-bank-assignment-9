import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'

const Home = () => {
    const loadData = useLoaderData();
    const quizTopics = loadData.data;
    // console.log(quizTopics);
    return (
        <div className='home-container'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h5>Learning Courses Online</h5>
                            <p>Online quizzes are a popular form of entertainment for web surfers. Online quizzes are generally free to play and for entertainment purposes only though some online quiz websites offer prizes.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Learning Courses Online</h5>
                            <p>Online quizzes are a popular form of entertainment for web surfers. Online quizzes are generally free to play and for entertainment purposes only though some online quiz websites offer prizes.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='quiz-container mt-5 mb-5'>
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