import Link from 'next/link'
const NavBar = () => {
    return ( 
       /*  <div className="bg-white z-20 dark:bg-slate-800 text-slate-800 dark:text-white">
            <nav className='bg-white z-20 dark:bg-slate-800 fixed md:static w-full md:w-auto border-b md:border-none shadow-lg md:shadow-none dark:border-none'>
                <div className='p-6 container mx-auto'>

                 <Link href="/" className="text-3xl px-2 cursor-pointer">
                Portfolio
            </Link>
            <Link href="/" className="text-2xl px-1 cursor-pointer">
                Github
            </Link>
            <Link href="/" className="text-2xl px-1 cursor-pointer">
                Blog
            </Link>
                </div>
            </nav>
        </div> */
        /* <div>

        <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden>

        <label for="hamburger" className="peer-checked:hamburger block z-20 cursor-pointer md:hidden transition p-5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded">
            <div className="h-0.5 w-6 bg-black dark:bg-white transition"></div>
            <div className="mt-2 h-0.5 w-6 bg-black dark:bg-white transition"></div>
        </label>


        <!-- Cuerpo de los enlaces -->
        <div className="bg-white dark:bg-slate-900 dark:md:bg-slate-800 w-3/5 shadow-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row">

            <!-- Enlaces -->
            <div className="px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0">
                <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500">Caracteristicas</a>
                <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-yellow-400">Ayuda</a>
                <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-indigo-500">Componentes</a>
                <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-pink-500">Idiomas</a>
            </div>


            <!-- Boton -->
            <div className="block md:hidden border-t py-8 px-6 md:border-t-0 dark:border-slate-700 md:py-0 md:pr-0 md:pl-6">
                <a href="" className="block px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:bg-blue-600">Descargar</a>
            </div>


        </div>
        </div> */
        <nav className='z-20 bg-white dark:bg-slate-800 fixed md:static w-full md:auto border-b md:border-none shadow-lg md:shadow-none dark:border-none'>
            <div className='p-6 container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='z-20'>
                        <a href="" className='flex items-center'>
                            <img src="personalLogo2.png" alt="Logo" className='w-20 h-14 object-cover object-center'/>
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
                                <a href="" className='tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500'>About</a>
                                <a href="" className='tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500'>Skills</a>
                                <a href="#projects" className='tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500'>Proyects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
     );
}
 
export default NavBar;