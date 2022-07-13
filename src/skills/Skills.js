import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <Title text='Skills'/>
                <div className={s.skills}>
                    <Skill title='HTML' description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title='CSS' description={'Lorem consectetur adipisicing elit.'}/>
                    <Skill title='JS' description={'Lorem ipsum dolor sit amet.'}/>
                    <Skill title='React' description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};
