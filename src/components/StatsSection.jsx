// components/StatsSection.jsx
import React from 'react';

const StatsSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between my-4">
        <hr className="w-full border-t border-gray-200" />
        <span className="px-2 text-sm text-gray-500">Today</span>
        <hr className="w-full border-t border-gray-200" />
      </div>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Here is the analysis about who might win this match! Keep digging Amigos!
      </h2>
      <div className="flex items-center my-4">
        <span className="text-black font-semibold">All probabilities</span>
        <hr className="flex-grow border-t border-gray-200 ml-4" />
      </div>
      <div className="p-6 rounded-lg shadow mb-8 md:w-1/2">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">All probabilities</h3>
        <div className="bg-[#FF7640] p-6 rounded-lg mb-4">
          <p className="text-4xl font-bold mb-2">17%</p>
          <p className="text-lg text-gray-700">chances of India winning</p>
        </div>
        {/* Parameters Adjustments */}
        <div className="mb-4 bg-[#F5F5F5]">
          <label className="block text-gray-700 mb-2">Adjust these parameters for more insight.</label>
          <div className="grid grid-cols-1">
            {/* Dropdowns for parameters */}
            {/* Repeat similar blocks for each parameter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
