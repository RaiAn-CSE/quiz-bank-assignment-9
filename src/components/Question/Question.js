import Options from '../Options/Options';


const Question = ({ quiz, questionHandler }) => {
    // console.log(quiz);
    const { question, options, id } = quiz;
    const handlerOption = (data) => {
        questionHandler(data);
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
        </div>
    );
};

export default Question;