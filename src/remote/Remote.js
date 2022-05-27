import React from 'react';
import s from './Remote.module.css'

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                    <button className={s.button}><b>Нанять меня</b></button>
                </div>
            </div>
        </div>
    );
};
