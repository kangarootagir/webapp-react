import React, { useState } from 'react';
import './QuizApp.sass'
import renderQuestion from "../renderQuestion/renderQuestion.jsx";

const QuizApp = () => {

    return (
        <div className={"quiz_main_block"}>
            {renderQuestion()}
        </div>
    );
};

export default QuizApp;