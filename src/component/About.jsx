import React from 'react'
import Picture from '../assets/Picture.jpg'

const About = () => {
  return (
    <div id="About" className="h-full w-full bg-gray-800 appearance-auto">
      <div className="flex justify-center">
        <div className="w-[80%] h-full md:h-[610px] py-10 md:flex md:flex-row-reverse">
        <img src={Picture} alt="" className="size-70 w-full object-cover md:h-[526px]" />
        <div className="md:h-[68vh] md:my-4 md: md:mr-[-150px] z-10 lg:px-4 lg:mr-0">
          <h1 className="w-full border-2 border-gray-400/40 text-4xl font-bold uppercase text-center my-2 py-1 md:py-2 md:border-0 md:bg-gray-900/80 lg:bg-transparent lg:text-end lg:text-6xl"><span className="bg-clip-text text-transparent bg-gradient-to-l from-gray-600 to-gray-300">About Me</span></h1>
          <p className="w-full bg-gray-900/60 p-4 text-[16px] md:text-[18px] text-white">I graduated with a degree of a Bachelor of Science in Computer Science and who has a passion for coding, problem-solving, and technology. I have experience in programming and designing apps, websites, and databases. As a computer science major, I have honed my skills in programming languages such as C++, Java, Python, and MySQL. I have also worked with web development technologies such as HTML, CSS, JavaScript, and PHP, and have experience in creating responsive and functional websites.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
