import useLanguage from "@/hooks/useLanguaje";

const Skills = () => {
    const {lang} = useLanguage()
    return ( 
        <div id="skills" className="flex flex-col m-1">
            <div>
                <h2 className="text-3xl text-center font-medium underline underline-offset-5 ">{lang === 'Spanish'? "Tecnologias" :"Skills"}
                </h2>
            </div>
            <div className=" p-5 lg:p-10 grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-10 lg:gap-24 lg:grid-cols-6 ">
                <div className="w-auto h-auto">
                    <img src="skills-images/html5.png" alt="html" />
                </div>
                <div>
                    <img src="skills-images/css.png" alt="Css" />
                </div>
                <div>
                    <img src="skills-images/javascript.png" alt="javascript" />
                </div>
                <div>
                    <img src="skills-images/react.png" alt="react" />
                </div>
                <div>
                    <img src="skills-images/nextjs.png" alt="react" />
                </div>
                <div>
                    <img src="skills-images/tailwind.png" alt="react" />
                </div>
                <div>
                    <img src="skills-images/postgresql.png" alt="postgresql" />
                </div>
                <div className="">
                    <img src="skills-images/node-js.png" alt="node" />
                </div>
                <div>
                    <img src="skills-images/sequelize.png" alt="sequelize" />
                </div>
                <div>
                    <img src="skills-images/typescript.png" alt="typescript" />
                </div>
            </div>
        </div>
     );
}
 
export default Skills;