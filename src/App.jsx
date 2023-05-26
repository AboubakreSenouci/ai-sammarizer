import { useState } from 'react'
import background from '../assets/favicon.ico'

import link from '../assets/link.svg'

import {FiCornerDownLeft} from "react-icons/fi"

const App = () => {

  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })

  const handelSubmit = async (event) => {
    alert("submited!")
  }
  return(
    <div className=" w-full bg-center h-screen text-center text-7xl font-semibold lg:text-6xl md:text-5xl " 
    style={{ backgroundImage: "url('../assets/bg.png')" }}>
        <div className='flex items-center justify-between px-24 py-6 text-xl md:px-8'>
            <div className='flex items-center gap-x-2 text-4xl'>
                <img  className='' src={background} alt="logo"/>
                <p>Sumz</p>
            </div>
            <button className='px-6 py-2 rounded-3xl text-white font-normal bg-black text-lg
            hover:bg-white hover:text-black hover:border-black border transition duration-300 ease-in-out
            '>GitHub</button>
        </div>
          <p className="tracking-wide pt-24">Summarize Articles with</p>
          <p className="bg-clip-text text-transparent from-orange-400 to-orange-600  bg-gradient-to-r">OpenAI GPT-4</p>
          <div className='text-xl font-normal text-gray-500 max-w-3xl mx-auto pt-6 pb-20 md:text-2xl md:mx-4'>
              Simplify your reading with Summize, an open-source article summarizer 
              that transforms lengthy articles into clear and concise summaries
          </div>
          <form className='text-xl font-normal w-2/5 h-14 mx-auto flex items-center border border-gray-300 focus:border-gray-900 bg-white xl:w-3/5 md:w-full '>
            <img className='text-black px-4' src={link} alt="copy" />
            <input className='tracking-wider p-3 rounded-md w-full focus:outline-none ' type="url" placeholder='Enter a URL' 
            onSubmit={(event) => handelSubmit(event)}
            value={article.url}
            onChange={(event) => setArticle({
              ...article,url: event.target.value
            })}/>
            <button className='text-gray-400 py-2 px-4 border border-gray-300 m-2 hover:border-gray-600 hover:text-gray-600' type='submit'>
              <FiCornerDownLeft/>
            </button>
          </form>
    </div>
  )
}
export default App;
