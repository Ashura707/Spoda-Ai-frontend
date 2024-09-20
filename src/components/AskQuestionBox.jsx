// components/AskQuestionBox.jsx
import React from 'react';
import Submit from './assets/right-arrow.png';

const AskQuestionBox = () => {
  return (
    <div className="flex flex-row gap-2 items-center bg-white p-6 rounded-lg shadow">
      <input
        type="text"
        placeholder='Ask questions like "Which bowler in KKR takes the most wickets in powerplay"?'
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      <button className="">
        <img src={Submit} alt="submit" width={25} height={25} />
      </button>
    </div>
  );
};

export default AskQuestionBox;
