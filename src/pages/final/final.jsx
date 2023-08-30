import React from 'react';
import {Link} from "react-router-dom";
import './final.sass'

const Final = () => {
    return (
        <div className={"final_block"}>
            <div className="final_local_block">
                {/*<div className="progress_block">*/}
                {/*    <div className="progress__inner_block"></div>*/}
                {/*</div>*/}
                <h1 className="final_main_text">
                    🙏Благодарим вас за прохождение опроса!
                    <br/>
                    <br/>
                    На основании предоставленных данных мы подберем для вас наилучшие условия для игры в покер.<br/><br/>
                    Помните! В покере считается самым главным <a className={"final_link"} href="https://telegra.ph/CHto-takoe-bankroll-v-pokere-08-26">банк-ролл</a> менеджмент. Не играйте на последние деньги! Удачи в игре!
                </h1>
            </div>
        </div>
    );
};

export default Final;