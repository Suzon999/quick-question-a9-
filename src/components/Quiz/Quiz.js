import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css'
const Quiz = ({ quiz }) => {
    const [isShow, setIsShow] = useState(false)
    const { options, question, correctAnswer } = quiz;
    console.log(quiz);
    const hendleAns = (ans) => {
        if (correctAnswer === ans) {
            toast.success("wow !! your answers is right!!!");
        }
        else {
            toast.error("wrong ! your answers is wrong!!!!");
        }
    }
    if (isShow) {
        toast.success(`${correctAnswer}`);
    }
    return (
        <div className='quiz-container container mt-5'>
            <div className='eye-icon '>
                <h3> Quiz :{question} </h3>
                <p onClick={() => { setIsShow(true) }}><FaEye></FaEye> </p>
            </div>
            <div className='option'>
                {
                    options.map(option => <p onClick={() => hendleAns(option)}>{option} </p>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quiz;