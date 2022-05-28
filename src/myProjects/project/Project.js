import React from 'react';
import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a href="#" className={s.button}>Смотреть</a>
            </div>
            <h4 className={s.title}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};
