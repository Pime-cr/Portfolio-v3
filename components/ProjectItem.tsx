import React from "react";
import Image from "next/image";

interface ProjectItemProps {
    name:string,
    description:string,
    image:string,
    href?:string,
    repository?:string
}

const ProjectItem:React.FC<ProjectItemProps> = ({name,description,image,href,repository}) => {
    return ( 
        <div className="w-auto h-auto bg-white hover:scale-110 transition m-2">
            <div className="h-1/2 w-full bg-black">
                <Image src={`/${image}`} alt={`${name}`} width={500} height={500} className="object-cover object-center h-full w-full"/>
            </div>
            <div className="h-1/2 text-black p-2  flex flex-col justify-between">
                <div className="text-2xl text-center font-semibold">
                    {name}
                </div>
                <div className="mx-auto overflow-hidden">
                    {description}
                </div>
                <div className="flex flex-row justify-evenly cursor-pointer">
                    <div>
                        <a href={href} target="_blank">Deploy</a>                        
                    </div>
                    <div>
                        <a href={repository} target="_blank">Repository</a> 
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectItem;