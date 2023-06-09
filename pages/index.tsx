import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import ProjectModal from '@/components/ProjectModal'
import Footer from '@/components/footer'
import Skills from '@/components/Skills'


export default function Home() {
  return (
    <div className=' bg-white text-slate-800 dark:bg-penn-blue dark:text-white '>

      <NavBar/>
        <Header />
        <Skills />
        <ProjectModal/>
        <Footer/>
      </div>
  )
}
