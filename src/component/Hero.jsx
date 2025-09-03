import React from 'react'
import Image from '../assets/Profile.png'

const Hero = () => {
  return (
    <div className="h-[100vh] w-full bg-gray-900">
      <div className="h-full w-full bg-gradient-to-b from-gray-900 to-gray-500 opacity-40 absolute"></div>
      <div className="flex justify-end">
        <div className="absolute w-[85%] h-[80vh] mt-[60px] flex md:items-center items-end">
          <div className="text-white pl-10 w-full bg-gradient-to-r from-gray-700 to-transparent md:bg-none py-8">
          <h1 className="font-bold font-sans lg:text-7xl md:text-6xl text-4xl bg-clip-text text-transparent bg-gradient-to-l from-gray-100 to-gray-400">Hello,</h1>
          <p className="md:text-4xl text-2xl font-bold uppercase text-gray-400">I'm <span className="bg-clip-text text-transparent  bg-gradient-to-l from-emerald-700 to-lime-700">Kien Juntong</span></p>
          <p className="md:text-3xl text-2xl uppercase font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-l from-gray-700 to-gray-300">'a web developer.</p>
          </div>
        </div>
        <img src={Image} alt="" className="h-[100vh] object-center object-cover size-[900px]" />
      </div>
    </div>
  )
}

export default Hero

