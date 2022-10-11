import React from 'react';

const Options = ({ option, id, handlerOption }) => {

    const optionHandler = (event) => {
        const selectedOption = event.target.value;
        const data = { selectedOption, id }
        handlerOption(data);
    }
    return (
        <div>
            <div>
                <input type="radio" name="data" value={option} onClick={optionHandler} />
                <label>{option}</label><br></br>
            </div>
        </div>
    );
};

export default Options;