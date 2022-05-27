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
                    <textarea cols="30" rows="15" className={s.textarea}/>
                </form>
                <button className={s.button}><b>Отправить</b></button>
            </div>
        </div>
    );
};
