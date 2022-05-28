import React from 'react';
import s from './Remote.module.css'

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <a href="#" className={s.button}><b>Нанять меня</b></a>
            </div>
        </div>
    );
};
