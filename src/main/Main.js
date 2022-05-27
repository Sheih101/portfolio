import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Шейх Гаджиалиев.</h1>
                    <p>Я front-end разработчик </p>
                </div>
                <div className={s.photo}>
                    Photo
                </div>
            </div>
        </div>
    );
};
