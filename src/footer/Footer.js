import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Шейх Гаджиалиев</h2>
                <div className={s.icons}>
                    <div className={s.icon}>Icon</div>
                    <div className={s.icon}>Icon</div>
                    <div className={s.icon}>Icon</div>
                    <div className={s.icon}>Icon</div>
                </div>
                <h4 className={s.copyright}><b>© 2022 Все права защищены</b></h4>
            </div>
        </div>
    );
};
