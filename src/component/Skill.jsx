import React from 'react'

const Skill = () => {
  return (
    <section id="skills" class="py-10 pb-20 bg-gray-800">
            <h2 class="text-4xl md:text-5xl uppercase font-bold mb-12 text-center text-white pb-5"><span className="bg-clip-text text-transparent bg-gradient-to-l from-gray-600 to-gray-300">Skills & Expertise</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-12 md:px-15 lg:px-40">
                <div class="bg-gradient-to-l from-gray-800/80 to-gray-700/50 p-6 rounded-xl shadow-sm border-2 border-gray-800/10">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 hover:scale-105 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg mb-3 text-gray-200/70">UI/UX Design</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-blue-50 text-blue-700 text-xs rounded-full">Figma</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-blue-50 text-blue-700 text-xs rounded-full">Sketch</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-blue-50 text-blue-700 text-xs rounded-full">Adobe XD</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-blue-50 text-blue-700 text-xs rounded-full">Prototyping</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-blue-50 text-blue-700 text-xs rounded-full">Wireframing</span>
                    </div>
                </div>
                
                <div class="bg-gradient-to-l from-gray-800/80 to-gray-700/50 p-6 rounded-xl shadow-sm border-2 border-gray-800/10">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 hover:scale-105 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg mb-3 text-gray-200/70">Frontend Development</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-purple-50 text-purple-700 text-xs rounded-full">React</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-purple-50 text-purple-700 text-xs rounded-full">Vue.js</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-purple-50 text-purple-700 text-xs rounded-full">JavaScript</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-purple-50 text-purple-700 text-xs rounded-full">TypeScript</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-purple-50 text-purple-700 text-xs rounded-full">HTML/CSS</span>
                    </div>
                </div>
                
                <div class="bg-gradient-to-l from-gray-800/80 to-gray-700/50 p-6 rounded-xl shadow-sm border-2 border-gray-800/10">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover:scale-105 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg mb-3 text-gray-200/70">Product Strategy</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-green-50 text-green-700 text-xs rounded-full">User Research</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-green-50 text-green-700 text-xs rounded-full">Data Analysis</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-green-50 text-green-700 text-xs rounded-full">A/B Testing</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-green-50 text-green-700 text-xs rounded-full">Roadmapping</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-green-50 text-green-700 text-xs rounded-full">Product Metrics</span>
                    </div>
                </div>
                
                <div class="bg-gradient-to-l from-gray-800/80 to-gray-700/50 p-6 rounded-xl shadow-sm border-2 border-gray-800/10">
                    <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 hover:scale-105 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-lg mb-3 text-gray-200/70">Other Skills</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-yellow-50 text-yellow-700 text-xs rounded-full">Virtual Assistant</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-yellow-50 text-yellow-700 text-xs rounded-full">Data Entry</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-yellow-50 text-yellow-700 text-xs rounded-full">Cooking</span>
                        <span class="skills-pill px-3 py-1 hover:bg-gray-400 duration-300 bg-yellow-50 text-yellow-700 text-xs rounded-full">Driving</span>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Skill
