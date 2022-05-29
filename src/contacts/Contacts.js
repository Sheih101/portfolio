import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Контакты</h2>
                <form className={s.form}>
                    <input type="text" className={s.input}/>
                    <input type="text" className={s.input}/>
                    <textarea rows="5"/>
                </form>
                <a href="#" className={s.button}><b>Отправить</b></a>
            </div>
        </div>
    );
};
