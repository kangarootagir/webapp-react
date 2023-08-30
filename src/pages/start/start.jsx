import React from 'react';
import { Link } from 'react-router-dom';
import './start.sass'

const Start = () => {
    return (
        <div className={"start_block"}>
            <div className="start_local_block">
                {/*<div className="progress_block">*/}
                {/*    <div className="progress__inner_block"></div>*/}
                {/*</div>*/}
                <h1 className="main_text">Добро пожаловать!<br/>Для подачи заявки пройдите небольшой опрос</h1>
                <div className="start_btn_list">
                    <Link to={"/quiz"} className={"btn_go_quiz conf_btn btn btn-success"}>Перейти к опросу</Link>
                    <Link to={"/final"} className={"btn_go_quiz conf_btn btn btn-success"}>Пропустить опрос</Link>
                </div>
            </div>
        </div>
    );
};

export default Start;