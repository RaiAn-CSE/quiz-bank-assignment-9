import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Options from '../Options/Options';

import 'react-toastify/dist/ReactToastify.css';


const Question = ({ quiz, questionHandler }) => {
    // console.log(quiz);
    const { question, options, id, correctAnswer } = quiz;
    const handlerOption = (data) => {
        questionHandler(data);
    }

    const correctHandler = (correctAnswer) => {
        alert(correctAnswer);
    }

    return (
        <div>
            <p>Question : {question}</p>
            {
                options.map((option, index) => <Options
                    key={index}
                    id={id}
                    option={option}
                    handlerOption={handlerOption}
                ></Options>)
            }
            <FontAwesomeIcon onClick={() => correctHandler(correctAnswer)} icon={faEye}></FontAwesomeIcon>

        </div>
    );
};

export default Question;