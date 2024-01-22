import {BTProject} from './Projects/BTProject';
import {HHMDProject} from './Projects/HHMDProject'
import {MVProject} from './Projects/MVProject'

export default function Projects(){

    return (
        <>
            <HHMDProject/>
            <MVProject/>
            <BTProject/>
        </>
    )
}