import React from 'react'
import s from './Projects.module.css'
import {Project} from './project/Project'
import {Title} from '../common/components/title/Title'
import todolistImage from '../assets/image/todolist.png'
import portfolioImage from '../assets/image/portfolio.jpg'

export const Projects = () => {
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const portfolio = {
        backgroundImage: `url(${portfolioImage})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <Title text="projects"/>
                <div className={s.projects}>
                    <Project style={todolist}
                             title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet zxcasw xzc asczx asd it amet zxcasw xzc asczx asd it amet zxcasw xzc asczx asd .'}
                    />
                    <Project style={portfolio}
                             title={'Portfolio'}
                             description={'Lorem ipsum dolor sit.'}
                    />
                </div>
            </div>
        </div>
    )
}
