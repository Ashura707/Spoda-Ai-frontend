// components/AskSpodaSection.jsx
import React from 'react';
import Right from './assets/right-arrow.png';

const AskSpodaSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <div className="flex items-center my-4">
        <span className="text-black font-semibold">Dig Deeper with Ask Spoda</span>
        <hr className="flex-grow border-t border-gray-200 ml-4" />
      </div>
      <div className="flex flex-row flex-wrap gap-3 justify-start text-[0.5rem]">
        {/* Button Group */}
        <button className="flex items-center w-200 px-4 py-2 bg-[#E6F4D7] text-black rounded-lg border-[#CEEAB0]">
          <img src={Right} alt="right arrow" width={16} height={16} /> &nbsp;India's winning chances if they score over 150?
        </button>
        {/* Repeat buttons as necessary */}
      </div>
    </div>
  );
};

export default AskSpodaSection;
