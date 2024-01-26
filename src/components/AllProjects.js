import {BTProject} from './Projects/BTProject';
import {HHMDProject} from './Projects/HHMDProject'
import {MVProject} from './Projects/MVProject'
import './CSS/projects.css'



export default function AllProjects(){

    return (
        <div id='all-projects-cont'>
            <div className='showcase'>
                <HHMDProject/>
                <MVProject/>
            </div>
            <div className='phone'><BTProject/></div>
        </div>
    );
};