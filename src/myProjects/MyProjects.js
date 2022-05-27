import React from 'react';
import s from './MyProjects.module.css'
import {Project} from "./project/Project";

export const MyProjects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Мои проекты</h2>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing'}/>
                    <Project title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur'}/>
                </div>
            </div>
        </div>
    );
};
