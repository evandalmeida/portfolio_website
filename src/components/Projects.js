import {BTProject} from './Projects/BTProject';
import {HHMDProject} from './Projects/HHMDProject'
import {MVProject} from './Projects/MVProject'

export default function Projects(){

    return (
        <>
            <h1>Welcome to my Portfloio</h1>
            <HHMDProject/>
            <MVProject/>
            <BTProject/>
        </>
    )
}