import React from 'react';
import s from './MySkills.module.css'
import {Skill} from "./skill/Skill";

export const MySkills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Мои скиллы</h2>
                <div className={s.skills}>
                    <Skill title='JS' description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title='CSS' description={'Lorem consectetur adipisicing elit.'}/>
                    <Skill title='React' description={'Lorem ipsum dolor'}/>
                </div>
            </div>
        </div>
    );
};
