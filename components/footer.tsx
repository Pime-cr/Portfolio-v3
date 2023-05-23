const Footer = () => {
    return ( 
        <div className="bg-zinc-700 w-full h-min p-5 mt-2">
            <h1 className="text-xl lg:text-4xl text-center">&copy; Cristian Pimentel Portfolio</h1>
            <p className="text-xl text-center">2022 - {new Date().getFullYear()}</p>
        </div>
     );
}
 
export default Footer;