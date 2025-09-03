import React from "react";

const educationData = [
  {
    id: 1,
    level: "Elementary School",
    school: "Mukas Elementary School",
    duration: "2014",
    location: "Mukas, Kolambugan, Lanao del Norte",
    description:
      "Completed foundational education with focus on core subjects and extracurricular activities.",
  },
  {
    id: 2,
    level: "Secondary",
    school: "Diego H. Patigayon National High School",
    duration: "2018",
    location: "Mukas, Kolambugan, Lanao del Norte",
    description:
      "Expanded knowledge in sciences and humanities, participated in school clubs and sports.",
  },
  {
    id: 3,
    level: "Senior High School",
    school: "Lanao School of Science and Technology Inc.",
    duration: "2020",
    location: "Baroy, Lanao del Norte",
    description:
      "Graduated with honors, active in student government.",
  },
  {
    id: 4,
    level: "College",
    school: "Lanao School of Science and Technology Inc.",
    duration: "2024",
    location: "Abaga, Lala, Lanao del Norte",
    description:
      "Bachelor of Science in Computer Science, focused on software development and AI research.",
  },
];

const Education = () => {
  return (
    <section id="Education" className="w-full bg-gray-800">
      <div className="max-w-5xl mx-auto p-6 bg-gray-900/60 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-12 text-gray-200/70 text-center">
          Education
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line for medium+ screens */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-amber-700 h-full -translate-x-1/2"></div>

          <div className="flex flex-col md:grid md:grid-cols-9 md:gap-8">
            {educationData.map(
              ({ id, level, school, duration, location, description }, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <React.Fragment key={id}>
                    {/* Left side content */}
                    <div
                      className={`md:col-span-4 md:pr-8 md:text-right ${
                        isLeft ? "md:order-1" : "md:col-start-6 md:order-2"
                      }`}
                    >
                      {isLeft && (
                        <div className="inline-block bg-gradient-to-l from-gray-800/80 to-gray-500/40 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-[1.03] hover:bg-gray-600 hover:shadow-lg cursor-pointer">
                          <h3 className="text-xl font-semibold text-gray-200/80">
                            {level}
                          </h3>
                          <p className="text-gray-400/80 font-medium">
                            {school} - {location}
                          </p>
                          <p className="text-sm text-gray-200 mb-2">{duration}</p>
                          <p className="text-gray-100/60">{description}</p>
                        </div>
                      )}
                    </div>

                    {/* Timeline marker */}
                    <div className="md:col-span-1 flex justify-center md:order-3 relative">
                      <span className="block w-6 h-6 bg-gray-500 rounded-full border-4 border-gray-400 z-10"></span>
                      {/* Connector line */}
                      {index !== educationData.length - 1 && (
                        <span className="hidden md:block absolute top-6 left-1/2 w-1 h-full bg-gray-400 -translate-x-1/2"></span>
                      )}
                    </div>

                    {/* Right side content */}
                    <div
                      className={`md:col-span-4 md:pl-8 md:text-left ${
                        !isLeft ? "md:order-1" : "md:col-start-6 md:order-2"
                      }`}
                    >
                      {!isLeft && (
                        <div className="inline-block bg-gradient-to-l from-gray-800/80 to-gray-500/40 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-[1.03] hover:bg-gray-600 hover:shadow-lg cursor-pointer">
                          <h3 className="text-xl font-semibold text-gray-200/80">
                            {level}
                          </h3>
                          <p className="text-gray-400/80 font-medium">
                            {school} - {location}
                          </p>
                          <p className="text-sm text-gray-200 mb-2">{duration}</p>
                          <p className="text-gray-100/60">{description}</p>
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
