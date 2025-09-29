import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TeamAboutSection = () => {
  return (
    <>
    {/* 🔹 About Us Section */}
      <section id="about" className="py-16 bg-gray-50 section-padd">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Meet Our Team
          </h2>

          {/* 🔹 Responsive grid layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 🔹 Team Member 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-700">
                Ojobor Jude Ikechukwu
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Full-Stack Dev | React, TS, PHP, Node.js, MySQL, MongoDB, Python (beginner)
              </p>
              <div className="space-x-4">
                <a href="https://github.com/judeik" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaGithub className="mr-1"/>GitHub</a>
                <a href="https://www.linkedin.com/in/ojobor-jude-ik-292b9612b/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaLinkedin className="mr-1"/>LinkedIn</a>
              </div>
            </div>

            {/* 🔹 Team Member 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-700">
                Akpom David
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Frontend Dev | CSS, JavaScript, React, TypeScript
              </p>
              <div className="space-x-4">
                <a href="https://github.com/Dahvid16" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaGithub className="mr-1"/>GitHub</a>
                <a href="https://www.linkedin.com/in/davidakpom" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaLinkedin className="mr-1"/>LinkedIn</a>
              </div>
            </div>

            {/* 🔹 Team Member 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-700">
                Omolaja Mamun
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Beginner Backend Dev | C#, HTML, CSS, MySQL, Python (basic)
              </p>
              <div className="space-x-4">
                <a href="https://github.com/Omolaja2" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaGithub className="mr-1"/>GitHub</a>
                <a href="https://www.linkedin.com/in/omolaja-mamun-49b98634b" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaLinkedin className="mr-1"/>LinkedIn</a>
              </div>
            </div>

            {/* 🔹 Team Member 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-700">
                Chinemeze Njoku
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Python Dev | Data Science (NumPy, Pandas, Matplotlib), ML/AI learner
              </p>
              <div className="space-x-4">
                <a href="https://github.com/Chinemezee" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaGithub className="mr-1"/>GitHub</a>
                <a href="https://www.linkedin.com/in/chinemeze-njoku-7401051a8" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaLinkedin className="mr-1"/>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamAboutSection