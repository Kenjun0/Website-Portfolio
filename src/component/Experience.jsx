import React from "react";

const jobExperiences = [
  {
    id: 1,
    company: "Upwork",
    role: "Data Entry and Web Research",
    duration: "2023 - 2024",
    location: "Online",
    description: [
      "Accurately entered and updated records daily in Excel, ensuring data integrity and confidentiality",
      "Collaborated with team members to streamline data entry processes.",
    ],
  },
  {
    id: 2,
    company: "Upwork",
    role: "Product Listing using HTML code",
    duration: "2024 - 2025",
    location: "Online",
    description: [
      "Building product title and product details.",
      "Product listing using FrontPage HTML code",
    ],
  },
];

const JobExperience = () => {
  return (
    <section id="experience" className="w-full bg-gray-800 pb-15">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-gray-900/60 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-400/90 text-center sm:text-left">
          Job Experience
        </h2>
        <div className="space-y-15">
          {jobExperiences.map(({ id, company, role, duration, location, description }) => (
            <div
              key={id}
              className="border-l-4 border-blue-500 ml-4 pl-4 sm:pl-10"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200/70">{role}</h3>
                <span className="text-sm sm:text-base text-gray-200/70 mt-1 sm:mt-0">{duration}</span>
              </div>
              <p className="text-gray-400/90 font-medium mb-2 text-sm sm:text-base">
                {company} - {location}
              </p>
              <ul className="list-disc list-inside text-gray-400/70 space-y-1 text-sm sm:text-base">
                {description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
