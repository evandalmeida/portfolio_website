import {BTProject} from './Projects/BTProject';
import {HHMDProject} from './Projects/HHMDProject'
import {MVProject} from './Projects/MVProject'
import './CSS/projects.css'

export default function Projects(){

    return (
        <div id='projects-cont'>
            <h1 className='projects-header'>MY PROJECTS</h1>
            <div className='showcase-projects'>
                <HHMDProject/>
                <MVProject/>
            </div>
            <div className='phone'>
                <BTProject/>
            </div>
        </div>
    )
}