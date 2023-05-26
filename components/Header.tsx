import useLanguage from "@/hooks/useLanguaje";
import Image from "next/image";

const Header = () => {
    const {lang} = useLanguage()

    return ( 
        <div id="about" className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-normal pt-16">
            <div className="flex flex-raw justify-center items-center w-5/6 mb-5 mx-auto md:flex-col md:w-1/3 md:mx-16 lg:max-h-sm md:mb-0 lg:mx-0 ">
                {/* <Image src="/Pimentel-photo1.jpg" alt='Perfil' width={500} height={500} className="object-cover object-bottom w-auto h-auto xl:max-h-96 rounded-lg"/> */}
                <img src="Pimentel-photo1.jpg" alt="Perfil" className="object-cover object-bottom w-1/2 h-1/3 md:w-auto md:h-auto md:mt-3 xl:max-h-96 rounded-lg mt-20 "/>
                <div className="flex flex-col ml-10 md:order-first md:ml-0">
                    <h1 className='text-center text-3xl font-semibold'>Cristian Pimentel</h1>
                    <div className="text-center text-2xl font-medium pt-5">{lang==="Spanish"? "Desarrollador Full Stack" :"Full Stack Developer"}</div>
                </div>
            </div>

            <div className=" flex flex-col flex-1 pb-3 w-auto mb-10 md:mb-0 p-5 my-0 lg:my-14 lg:w-1/2 lg:max-h-sm lg:m-5">                
                <div className=" text-2xl md:text-3xl font-normal text-center md:text-left">{lang === "Spanish" ? "Sobre mi:" : "About me:"}</div>
                <div className="text-2xl md:text-3xl leading-relaxed break-words whitespace-pre-line ml-0 lg:mr-10">
                    {lang === "Spanish" ? 
                    (
                    <p className="whitespace-pre-line">Desarrollador web full stack con un perfil variado de tecnologias enfocado en la funcionalidad y eficiencia.

                    Me considero una persona con buen manejo de logica de programacion, autodidacta y con una gran predisposición al trabajo en equipo.

                    Si coincido con el perfil que estas buscando o te gustaria consultar algo, no dudes en ponerte en contacto!
                    </p>
                    
                    ) : 
                    (
                        <p className="whitespace-pre-line"> I am a full stack web developer with a varied profile of technologies focused on functionality and efficiency.

                             I consider myself a person with good programming logic, self-taught, and with a great predisposition to teamwork.
                             
                              If I match the profile you are looking for or you would like to ask something, do not hesitate to get in touch!
                       </p>)}
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