// components/MainContent.jsx
import React from 'react';
import Header from './Header';
import StatsSection from './StatsSection';
import AskSpodaSection from './AskSpodaSection';
import AskQuestionBox from './AskQuestionBox';

const MainContent = () => {
  return (
    <main className="flex-1 p-8 bg-white">
      <Header />
      <header className="flex flex-col items-start justify-center gap-3 mb-8">
        <div>
          <h1 className="text-1xl font-bold text-gray-800">India vs Australia</h1>
        </div>
        <div className="flex space-x-2 text-[0.7rem]">
          {/* Button Group */}
          <button className="px-2 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">Match Winner</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Toss Winner</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Top Batsman</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Top Bowler</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Runs</button>
        </div>
      </header>
      <StatsSection />
      <AskSpodaSection />
      <AskQuestionBox />
    </main>
  );
};

export default MainContent;
