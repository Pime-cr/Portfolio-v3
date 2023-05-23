import ProjectItem from "./ProjectItem";
import {projects} from "../profile"

const ProjectModal = () => {
    return ( 
        <div id="projects" className="bg-slate-900 w-auto h-auto flex flex-col p-2 my-2 mx-0 lg:mx-20 justify-between items-center border-[1px] border-white ">
            <div className="text-white text-3xl font-medium lg:text-3xl my-5">Proyects</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project:Record<string,any>)=>(
                    <ProjectItem key={project.name} name={project.name} description={project.description} image={project.image} href={project.href} repository={project.repository}/>
                ))}
            </div>
            <div>
                All Proyects
            </div>
        </div>
     );
}
 
export default ProjectModal;