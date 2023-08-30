import React, {useState, useEffect} from 'react';
import './renderQuestion.sass'
import './renderQuestion.less'
import questions from "../QuestionsBank.js";
import Final from './../../pages/final/final.jsx'


const RenderQuestion = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [progressWidth, setProgressWidth] = useState('0%');
    const [activeState, setActiveState] = useState(false);

    useEffect(() => {
        let width;
        if (currentQuestion > 3) {
            width = `${((currentQuestion - 2) / 4) * 100}%`;
        } else {
            width = `${((currentQuestion + 1) / 4) * 100}%`;
        }
        setProgressWidth(width);
    }, [currentQuestion]);


    const handleClick = () => {
        setActiveState(prevState => !prevState);
    };

    // const handleAnswer = (nextQuestion) => {
    //     if (Array.isArray(nextQuestion)) {
    //         setSelectedAnswers([...selectedAnswers, ...nextQuestion]);
    //     } else {
    //         setSelectedAnswers([...selectedAnswers, nextQuestion]);
    //     }
    //     if (nextQuestion === null) {
    //         setCurrentQuestion(null);
    //     } else {
    //         setCurrentQuestion(nextQuestion);
    //     }
    // };
    const handleAnswer = (nextQuestion) => {
        const question = questions[currentQuestion];
        if (question.allowMultipleAnswers) {
            // Если разрешено выбирать несколько ответов
            if (selectedAnswers.includes(nextQuestion)) {
                // Если ответ уже выбран, удаляем его из выбранных
                setSelectedAnswers(selectedAnswers.filter((answer) => answer !== nextQuestion));
            } else {
                // Добавляем ответ в выбранные
                setSelectedAnswers([...selectedAnswers, nextQuestion]);
            }
        } else {
            // Если выбор только одного ответа
            setSelectedAnswers([nextQuestion]);
        }
    };

    // const handleSubmit = () => {
    //     // Обработка выбранных ответов
    //     console.log(selectedAnswers);
    //     // Переход к следующему вопросу
    //     setCurrentQuestion(currentQuestion + 1);
    //     setSelectedAnswers([]);
    // };
    const handleSubmit = () => {
        let nextQuestion;
        if (currentQuestion === 0) {
            // Если это первый вопрос
            const answer = selectedAnswers[0];
            if (answer === 'Да') {
                nextQuestion = 1; // следующий вопрос для ответа "Да"
            } else if (answer === 'Нет') {
                nextQuestion = 4; // следующий вопрос для ответа "Нет"
            }
        } else if (currentQuestion === 3 && selectedAnswers[0] === 'Да') {
            // Если это последний вопрос после ответа "Да" на первый вопрос
            nextQuestion = null; // нет следующего вопроса
        } else if (currentQuestion === 6 && selectedAnswers[0] === 'Нет') {
            // Если это последний вопрос после ответа "Нет" на первый вопрос
            nextQuestion = null; // следующий вопрос для ответа "Нет"
        } else {
            nextQuestion = questions[currentQuestion].answers[0].nextQuestion; // следующий вопрос по умолчанию
        }
        setCurrentQuestion(nextQuestion);
    };


    if (currentQuestion === null) {
        // Отобразить финальную страницу
        console.log(selectedAnswers)
        return (
            <Final/>
        );
    }


    // if (currentQuestion === questions.length-1) {
    //     // Отобразить финальную страницу
    //     return <Final />;
    // }
    // const question = questions[questionIndex];


    const question = questions[currentQuestion];
    return (
        <div className={"quiz_local_block"}>
            <div className="quiz_ll">
                {/*<div className="progress">*/}
                {/*    <div style={{ width: progressWidth }} className="progress__inner"></div>*/}
                {/*</div>*/}
                {/*<h2 className={"question_text"}>{question.text}</h2>*/}
                {/*<div className="ans_map_list">*/}
                {/*    {question.answers.map((answer, index) => (*/}
                {/*        <a className={"ans_text"} key={index} onClick={() => handleAnswer(answer.nextQuestion)}>*/}
                {/*            {answer.text}*/}
                {/*        </a>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <div className={"quiz_local_block"}>
                    <div className="quiz_ll">
                        <div className="progress">
                            <div style={{ width: progressWidth }} className="progress__inner"></div>
                        </div>
                        <h1  className={"question_text"}>{question.text}</h1>
                        <div className="ans_map_list">
                            {question.answers.map((answer, index) => (
                                <label key={index}>
                                    <input
                                        type={question.allowMultipleAnswers ? 'checkbox' : 'radio'}
                                        value={answer.text}
                                        checked={selectedAnswers.includes(answer.text)}
                                        onChange={() => handleAnswer(answer.text)}

                                        id={`answer${index}`}

                                        className={"input_radio_checkbox"}
                                    />
                                    {/*${activeState ? 'active' : ''}*/}
                                    <span href="#" className={`ans_text ${question.allowMultipleAnswers ? 'checkbox' : 'radio'}`} onClick={handleClick}>{answer.text}</span>
                                </label>
                            ))}
                            <button className={"conf_btn btn btn-success"} onClick={handleSubmit}>Выбрать</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RenderQuestion;