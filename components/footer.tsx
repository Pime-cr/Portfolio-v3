const Footer = () => {
    return ( 
        <div className="bg-white dark:bg-slate-800 w-full h-min p-5 mt-2 relative">
            <h1 className="text-xl lg:text-4xl text-center">Cristian Pimentel </h1>
            <p className="text-xl text-center">2022 - {new Date().getFullYear()}</p>
            <div className='z-20 absolute right-2 bottom-1/2 top-1/4'>
                <a href="" className='flex items-center'>
                    <img src="personalLogo2.png" alt="Logo" className='w-20 h-14 object-cover object-center'/>
                </a>
            </div>
        </div>
     );
}
 
export default Footer;