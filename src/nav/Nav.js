import React from "react";
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="" className={s.link}>Главная</a>
            <a href="" className={s.link}>Скиллы</a>
            <a href="" className={s.link}>Проекты</a>
            <a href="" className={s.link}>Контакты</a>
        </div>
    );
};
