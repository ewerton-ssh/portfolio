import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {SiTailwindcss, SiReact, SiNodedotjs,SiNextdotjs, SiVite, SiAdobephotoshop, SiAdobeillustrator, SiFigma} from 'react-icons/si'
import char from '../src/assets/char.png';
import design from '../src/assets/design.png';
import code from '../src/assets/code.png'


function App() {

  return (
    <div>
      <main className='bg-white px-5'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons mx-10'>Developed by Ewerton Lima</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-sanfrancisco mx-10' href="#" >Resumo</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-sanfrancisco font-bold'>Ewerton Lima</h2>
            <h3 className='text-2xl py-2 font-sanfrancisco'>Developer front-end.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 font-sanfrancisco'>Com habilidades afiadas em programação, esse freelancer é a escolha perfeita para transformar sua necessidade em soluções brilhantes.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin/>
            <AiFillGithub/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <img src={char} className='object-fill' />
          </div>
        </section>
        <section>
          <div className='mx-10'>
            <h3 className='text-3xl py3 font-sanfrancisco font-bold mt-10'>Serviços</h3>
            <p className='text-md py-2 leading-8 text-gray-80 font-sanfrancisco'>Desde o início da minha jornada 
            como designer freelancer e desenvolvedor, 
            já fiz trabalho remoto para
            <span className="text-teal-500 font-sanfrancisco"> empresas </span>
            e prestei consultoria para 
            <span className="text-teal-500 font-sanfrancisco"> projetos </span>
             que atendiam diretamente a necessidade do consumidor, inclusive atendendo a parte fullstack (Banco de dados, API com CRUD e front-end utilizando React).
            </p>
          </div>
          <div className='lg:flex gap-10 mx-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 '>
              <img src={code} className='w-28 h-28 ml-auto mr-auto'/>
              <h3 className='text-lg pt-8 pb-2 font-sanfrancisco font-semibold'>Moderno</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-sanfrancisco">
                Trabalho principalmente com a linguagem Javascript, utilizando tecnologias como React, Node, TailwindCSS, utilizando frameworks de desenvolvimento mais atualizados como Next.js e Vite.
              </p>
              <div className='flex mt-5'>
                <div className='ml-auto mr-auto flex flex-row space-x-5'>
                <SiReact className='text-5xl text-[#087ea4]' />
                <SiNodedotjs className='text-5xl text-[#7ebc3d]' />
                <SiTailwindcss className='text-5xl text-[#38bdf8]'/>
                </div>
              </div>
              <div className='flex mt-5'>
                <div className='ml-auto mr-auto flex flex-row space-x-5'>
                <SiNextdotjs className='text-5xl text-[#000000]' />
                <SiVite className='text-5xl text-[#ba38fe]' />
                </div>
              </div>
            </div>
          </div>
          <div className='lg:flex gap-10 mx-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 '>
              <img src={design} className='w-28 h-28 ml-auto mr-auto'/>
              <h3 className='text-lg pt-8 pb-2 font-sanfrancisco font-semibold'>Designer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-sanfrancisco">
                Criação de designs que vão de arrojados a minimalistas, responsivos e de fácil entendimento do usuário.
              </p>
              <span className="text-teal-500 font-sanfrancisco"> Ferramentas de design que eu uso. </span>
              <div className='flex mt-5'>
                <div className='ml-auto mr-auto flex flex-row space-x-5'>
                <SiAdobephotoshop className='text-5xl text-[#001d34]' />
                <SiAdobeillustrator className='text-5xl text-[#310000]' />
                <SiFigma className='text-5xl text-[#a259ff]' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 mt-5 mx-10 font-semibold font-sanfrancisco'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mt-5 mx-10 font-sanfrancisco">
              Segue abaixo um de meus trabalhos como freelancer...
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
