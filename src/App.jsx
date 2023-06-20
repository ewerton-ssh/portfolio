import { useState } from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {SiTailwindcss, SiReact, SiNodedotjs,SiNextdotjs, SiVite, SiAdobephotoshop, SiAdobeillustrator, SiFigma} from 'react-icons/si'
import char from '../src/assets/char.png';
import design from '../src/assets/design.png';
import code from '../src/assets/code.png'
import mockup from '../src/assets/mockup.png'
import DarkToggle from './components/DarkToggle';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeChange = (newDarkMode) => {
    setDarkMode(newDarkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-lg font-burtons ml-10 dark:text-gray-200'>Developed by Ewerton Lima</h1>
            <ul className='flex items-center'>
              <li><DarkToggle className='pl-3' onDarkModeChange={handleDarkModeChange}/></li>
              <li><a className='bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-3 font-sanfrancisco mr-3' href="#" >Resumo</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-600 font-sanfrancisco font-bold'>Ewerton Lima</h2>
            <h3 className='text-2xl py-2 font-sanfrancisco dark:text-gray-200'>Front End Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 font-sanfrancisco dark:text-gray-200'>Com habilidades afiadas em programação, esse freelancer é a escolha perfeita para transformar sua necessidade em soluções brilhantes.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/ewerton-q-de-oliveira-lima-b92040228'><AiFillLinkedin/></a>
            <a href='https://github.com/ewerton-ssh'><AiFillGithub/></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-purple-500 to-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <img src={char} className='object-fill' />
          </div>
        </section>
        <section>
          <div className='mx-10'>
            <h3 className='text-3xl py3 font-sanfrancisco font-bold mt-10 dark:text-gray-200'>Serviços</h3>
            <p className='text-md py-2 leading-8 text-gray-80 font-sanfrancisco dark:text-gray-200'>Desde o início de sua jornada 
            como designer freelancer e desenvolvedor, 
            ele efetuou trabalho remoto para
            <span className="text-teal-500 font-sanfrancisco"> empresas </span>
            e prestou consultoria para 
            <span className="text-teal-500 font-sanfrancisco"> projetos </span>
             que atendiam diretamente a necessidade do consumidor, inclusive atendendo Full Stack (Banco de dados, API com CRUD e Front End utilizando React).
            </p>
          </div>
          <div className='lg:flex gap-10 mx-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 '>
              <img src={code} className='w-28 h-28 ml-auto mr-auto'/>
              <h3 className='text-lg pt-8 pb-2 font-sanfrancisco font-semibold'>Moderno</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500 font-sanfrancisco">
                Desempenha seu serviço com linguagem Javascript, utilizando tecnologias como React, Node, TailwindCSS, fazendo uso de frameworks de desenvolvimento mais atualizados como Next.js e Vite.
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
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500 font-sanfrancisco">
                Criação de designs que vão de arrojados a minimalistas, responsivos e de fácil entendimento do usuário.
              </p>
              <span className="text-gray-800 dark:text-gray-500 font-sanfrancisco"> Ferramentas de design que eu uso. </span>
              <p className="text-teal-500 font-sanfrancisco"> Photoshop</p>
              <p className="text-teal-500 font-sanfrancisco"> Illustrator</p>
              <p className="text-teal-500 font-sanfrancisco"> Figma</p>
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
            <h3 className='text-3xl py-1 mt-5 mx-10 font-semibold font-sanfrancisco dark:text-gray-200'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-10 font-sanfrancisco">
              Segue abaixo um trabalho realizado como freelancer.
            </p>
            <h3 className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-200 mt-5 mx-10 font-sanfrancisco">
              Controle de Abastecimento
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-10 font-sanfrancisco">
            Simplifique e otimize o processo de controle de abastecimento em postos associados através de nosso aplicativo intuitivo, enviando solicitações de abastecimento via email, 
            gerenciando o fluxo e gerando relatórios detalhados em formato xml (servindo tanto para criar planilhas quanto importar para um sistema ERP), diminuindo as chances de uma possível fraude de combustível...
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 '>
              <img 
                src={mockup}
                className='rounded-lg object-cover ml-auto mr-auto'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
