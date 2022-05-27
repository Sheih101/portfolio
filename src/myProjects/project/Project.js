import React from 'react';
import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.buttonWrapper}>
                <button className={s.button}><b>Смотреть</b></button>
            </div>
            <div className={s.textWrapper}>
                <h4 className={s.title}>{props.title}</h4>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};
