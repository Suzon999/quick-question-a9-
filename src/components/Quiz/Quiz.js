import React from 'react';
import './Quiz.css'
const Quiz = ({ quiz }) => {
    const { options, question } = quiz;
    // console.log(options, question);
    return (
        <div className='quiz-container container mt-5'>
            <div>
                <h3> Quiz :{question} </h3>
            </div>
            <div className='option'>
                {
                    options.map(option => <p>{option} </p>)
                }
            </div>
        </div>
    );
};

export default Quiz;