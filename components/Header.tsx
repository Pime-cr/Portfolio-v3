import useLanguage from "@/hooks/useLanguaje";
import Image from "next/image";

const Header = () => {
    const {lang} = useLanguage()

    return ( 
        <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-normal pt-16">
            <div className="md:w-1/3 lg:max-h-sm w-5/6 mb-5 md:mb-0  mx-auto lg:mx-0 md:mx-16 flex flex-raw justify-center items-center">
                {/* <Image src="/Pimentel-photo1.jpg" alt='Perfil' width={500} height={500} className="object-cover object-bottom w-auto h-auto xl:max-h-96 rounded-lg"/> */}
                <img src="Pimentel-photo1.jpg" alt="Perfil" className="object-cover object-bottom w-1/2 h-1/3 md:w-auto md:h-auto xl:max-h-96 rounded-lg mt-20"/>
                <div className="flex flex-col ml-10">
                    <h1 className='text-center text-3xl font-semibold'>Cristian Pimentel</h1>
                    <div className="text-center text-2xl font-medium pt-5">{lang==="Spanish"? "Desarrollador Full Stack" :"Full Stack Developer"}</div>
                </div>
            </div>

            <div className=" flex flex-col flex-1 pb-3 w-auto mb-10 md:mb-0 p-5 my-0 lg:my-14 lg:w-1/2 lg:max-h-sm lg:m-5">                
                <div className=" text-2xl md:text-3xl font-normal text-center">{lang === "Spanish" ? "Sobre mi:" : "About me:"}</div>
                <div className="text-2xl md:text-3xl leading-relaxed break-words ml-0 lg:mr-10">
                    {lang === "Spanish" ? 
                    (
                    <div>Hola! Soy Cristian, Desarrollador web graduado de el Bootcamp de &quot;Soy Henry&quot;

                     Mi objetivo es obtener experiencia en el mundo de la programacion y perfeccionar mis habilidades

                      Me considero una persona con un buen manejo de la lógica de programación, autodidacta y con una gran predisposición al trabajo en equipo
                    </div>
                    
                    ) : 
                    (
                        <div>Hi! I am Cristian, Web developer graduated from &quot;Soy Henry&quot; Bootcamp 

                        Mi objetivo es obtener experiencia en el mundo de la programacion y perfeccionar mis habilidades
   
                         Me considero una persona con un buen manejo de la lógica de programación, autodidacta y con una gran predisposición al trabajo en equipo
                       </div>)}
                </div>
                {lang === "Spanish" ? (
                    <div className="text-end text-xl cursor-pointer pt-5">Contactame!</div>
                ):(
                    <div className="text-end text-xl cursor-pointer pt-5">Hire Me!</div>
                )}
        </div>
        </div>
     );
}
 
export default Header;