import Link from 'next/link'
import { useState,useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes'
import Image from 'next/image';
import useLanguage from '@/hooks/useLanguaje';

const NavBar = () => {
    const [mounted , setMounted] = useState(false)
    const {theme , setTheme , systemTheme} = useTheme()
    const {lang , setSpanish , setEnglish} = useLanguage()

    useEffect(()=>{
        setMounted(true)
    },[])

    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    console.log(lang)

    const Switcher = ()=>{
         if (lang === "Spanish") setEnglish()
         else setSpanish()
    }

    return ( 
       <nav className='z-20 bg-violet-700 dark:bg-slate-800 fixed md:static w-full md:auto border-b md:border-none shadow-lg md:shadow-none dark:border-none'>
            <div className='p-6 container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='z-20'>
                        <a href="" className='flex items-center'>
                            <img src="personalLogo2.png" alt="Logo" className='w-20 h-14 object-cover object-center text-black'/>
                        </a>
                    </div>

                    {/* cuerpo de menu */}
                    <div>
                        {/* boton responsive */}
                        <input type="checkbox" name="hamburguer" id="hamburguer" className='peer' hidden/>
                        <label htmlFor="hamburguer" className='peer-checked:hamburger block z-20 cursor-pointer md:hidden transition p-5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded'>
                            <div className='h-0.5 w-6 bg-black dark:bg-white transition'></div>
                            <div className='mt-2 h-0.5 w-6 bg-black dark:bg-white transition'></div>
                        </label>

                        {/* enlaces */}
                        <div className='bg-white dark:bg-slate-900 md:bg-slate-800 w-3/5 shadow-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row'>
                            <div className='px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0'>
                                <a href="" className='tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500'>
                                {lang === "Spanish" ? (<div>Sobre mi</div>) : (<div>About</div>)}</a>
                                <a href="" className='tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500'>
                                {lang === "Spanish" ? (<div>Tecnologias</div>) : (<div>Skills</div>)}</a>
                                <a href="#projects" className='tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500'>
                                {lang === "Spanish" ? (<div>Proyectos</div>) : (<div>Proyects</div>)}</a>
                                <button onClick={()=>setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className='tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500'>
                                    {currentTheme === 'light' ? (
                                        <div className='flex flex-row justify-between'>
                                            <div>Dark</div>
                                            <Image src="/moon.svg" alt="logo" color='white'  width={20} height={20}/>
                                        </div>
                                    ) : (
                                        <div className=' flex flex-row justify-between'>
                                            <div>Light</div>
                                            <Image src="/sun.svg" alt="logo" width="20" height="20" className='text-white'/>
                                        </div>
                                    )}
                                </button>
                                <button onClick={Switcher} className='tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500'>
                                    {lang === "Spanish" ? (<div>English</div>) : (<div>Español</div>)}
                                </button>
                            </div>
                        {/* nav bottom */}
                            <div className="block md:hidden border-t py-8 px-6 md:border-t-0 dark:border-slate-700 md:py-0
                                md:pr-0 md:pl-6 ">
                                <div className='z-50 flex md:flex-col flex-row justify-around gap-10'>
          <a href='https://www.linkedin.com/in/cristian-pimentel/' target='_blank'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='w-6 h-6 text-white/50 hover:text-white hover:scale-150 transition' viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
          <a href='https://github.com/Pime-cr' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='w-6 h-6 text-white/50 hover:text-white hover:scale-150 transition' viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          
        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
     );
}
 
export default NavBar;