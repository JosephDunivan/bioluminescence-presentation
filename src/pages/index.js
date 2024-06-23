import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';

const slides = [
  {
    title: "Illuminating Our Waters: Predicting Bioluminescent Dinoflagellates",
    content: [
      "A Data-Driven Approach for Enhancing Kayaking Experiences",
      "Data Scientist: Joseph Dunivan"
    ],
    type: "title"
  },
  {
    title: "Why This Matters",
    content: [
      "Improve tour planning and customer satisfaction",
      "Increase the likelihood of spectacular bioluminescent displays",
      "Contribute to scientific understanding of local marine ecosystems",
      "Scientific experiences can be a potential revenue add"
    ]
  },
  {
    title: "Current Challenges",
    content: [
      "Unpredictable nature of bioluminescent events",
      "Reliance on general indicators (e.g., chlorophyll levels)",
      "Missed opportunities for amazing customer experiences"
    ]
  },
  {
    title: "The Power of Data",
    content: [
      "Moving beyond guesswork",
      "Leveraging multiple data points for accurate predictions",
      "Turning our tours into valuable scientific contributions"
    ]
  },
  {
    title: "Key Predictors to Explore",
    content: [
      "Water temperature",
      "Salinity",
      "Nutrient levels (nitrogen, phosphorus)",
      "Water turbulence",
      "Moon phase and light conditions"
    ]
  },
  {
    title: "Additional Factors",
    content: [
      "Seasonal patterns",
      "Historical bloom data",
      "pH levels",
      "Dissolved oxygen",
      "Presence of predators/competitors"
    ]
  },
  {
    title: "Data Collection Methods",
    content: [
      "Simple: Manual recordings (temperature, salinity)",
      "Moderate: Portable test kits (nutrients, pH)",
      "Advanced: Partnerships with research institutions for complex analysis"
    ]
  },
  {
    title: "Citizen Science Opportunity",
    content: [
      "Engage customers in data collection",
      "Create unique, educational experiences",
      "Contribute to larger scientific projects"
    ]
  },
  {
    title: "Potential Benefits",
    content: [
      "Improved tour scheduling",
      "Enhanced marketing ('data-driven bioluminescence predictions')",
      "Differentiation from competitors",
      "Contribution to local marine conservation efforts"
    ]
  },
  {
    title: "Implementation Plan",
    content: [
      "Start with basic measurements (temperature, salinity)",
      "Gradually introduce more complex data collection",
      "Develop a simple scoring system for prediction",
      "Refine and expand over time"
    ]
  },
  {
    title: "Challenges and Considerations",
    content: [
      "Initial investment in equipment",
      "Training staff in data collection methods",
      "Ensuring data accuracy and consistency",
      "Managing customer expectations"
    ]
  },
  {
    title: "Next Steps",
    content: [
      "Identify key team members to lead the initiative",
      "Research and select initial data collection tools",
      "Develop a data recording system",
      "Create a training program for guides",
      "Plan a pilot phase for the upcoming season"
    ]
  },
  {
    title: "Conclusion",
    content: [
      "Embrace the power of data to enhance our tours",
      "Position our company as leaders in eco-tourism",
      "Create unforgettable experiences for our customers"
    ]
  },
  {
    title: "Q&A",
    content: "Open floor for questions and discussion",
    type: "end"
  }
];

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const renderContent = (content) => {
    if (typeof content === 'string') {
      return <p className="text-xl mb-4">{content}</p>;
    } else if (Array.isArray(content)) {
      return (
        <ul className="list-disc list-inside text-xl">
          {content.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
        {slides[currentSlide].type === 'title' ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
            {renderContent(slides[currentSlide].content)}
          </div>
        ) : slides[currentSlide].type === 'end' ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-2xl">{slides[currentSlide].content}</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6">{slides[currentSlide].title}</h2>
            {renderContent(slides[currentSlide].content)}
          </>
        )}
      </div>
      <div className="flex justify-between w-full max-w-3xl mt-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 flex items-center"
        >
          <ChevronLeft className="mr-2" />
          Previous
        </button>
        <span className="text-xl">{currentSlide + 1} / {slides.length}</span>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 flex items-center"
        >
          Next
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Illuminating Our Waters</title>
