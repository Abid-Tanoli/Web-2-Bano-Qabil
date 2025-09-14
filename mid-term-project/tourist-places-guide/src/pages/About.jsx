import React from "react";

const About = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Tourist Guide</h1>
      <p className="text-gray-700 leading-relaxed">
        Explore tourist places in Pakistan by region and category.
        Filter places, view details, ratings, and best times to visit.
        <br /><br />
        Built with React, React Router, and Tailwind CSS. Fully responsive with modern UI/UX,
        smooth hover effects, gradients, and clean typography.
      </p>
    </div>
  );
};

export default About;
