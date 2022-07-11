import React from 'react';
import s from './Projects.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <Title text='projects'/>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Project title={'Portfolio'} description={'Lorem ipsum dolor sit.'}/>
                </div>
            </div>
        </div>
    );
};
