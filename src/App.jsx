
import Right from "./components/Right.jsx"
import Submit from "./components/assets/right-arrow.png"
import spoda from  "./components/assets/spoda.jpg"
import supportspod from "./components/assets/supportspod.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.css';




const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-6 border-r border-gray-200 hidden md:flex flex-col justify-between">
        {/* Logo Section */}
        <div>
          <div className="flex items-center mb-8">
            
            <img src={spoda} alt="spoda loga" width={150} height={50}/>
            {/* <span className="text-xl font-bold text-gray-800">SPODA</span> */}
          </div>
          {/* Navigation */}
          <nav>
            <ul>
              <li className="text-gray-700 font-semibold text-lg mb-4 cursor-pointer hover:text-blue-600">
                Upcoming Matches

              </li>
            </ul>
          </nav>
        </div>
        {/* User Info and Support */}
        <div>
         
        <div className="flex items-center mb-4">
            <img src={supportspod} alt="submit" width={25} height={25} />
            <span className="text-lg font-medium ml-4">Support</span>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">  {/* Add mb-4 here for spacing */}
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm font-semibold text-gray-700">80%</span>
  </div>
  
  <p className="text-sm text-gray-500 mb-2">Used credits</p>
  
  <p className="text-sm text-gray-500">You have used 80% of your available credits. Need more?</p>
  <button className="text-sm text-gray-500 hover:text-gray-700">Dismiss</button>
  <button className="mt-2 ml-6 text-sm text-gray-500 hover:underline">Ask for more!</button>
</div>

<div className="bg-gray-100 p-4 rounded-lg">
  <p className="text-sm font-semibold text-gray-700">olivia@untitledui.com</p>
</div>

            
        </div>  
         
       
                   
      </aside>

      



      {/* Main Content */}
      <main className="flex-1 p-8 bg-white">
        {/* Header */}

        <div className="flex items-center justify-between p-4  md:hidden bg-white shadow-md">
                    <i className="fas fa-bars text-2xl text-gray-800"></i>
                    <h1 className="text-xl font-semibold text-gray-800">spoda.ai</h1>
                    <div className="flex items-center">
                       
                    </div>
          </div>
            
          {/*  Spoda Hamburger and Icon in mobile view */}
          <div className=" md:hidden border  rounded-md w-100  mx-auto ">
            
      
      <nav className="flex items-center justify-between bg-white p-2">
        
        <button className="text-black text-2xl ml-2">
          <FontAwesomeIcon icon={faBars} />
        </button>

      
        <div className="flex items-center mb-4">
            <img src={spoda} alt="Spoda" width={150} height={100} />
      
        </div> 

      
        <div className="mr-2"></div>
      </nav>
    </div>
        <header className="flex flex-col items-start justify-center gap-3 mb-8">
          <div>
          <h1 className="text-1xl font-bold text-gray-800">India vs Australia</h1>

        
          </div>
     

         
          <div className="flex space-x-2 text-[0.7rem]">
            <button className="px-2 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
              Match Winner
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Toss Winner
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Top Batsman
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Top Bowler
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Runs
            </button>
          </div>
        </header>

        {/* Analysis Section */}
        <section>
          <div className="flex items-center justify-between my-4">
  <hr className="w-full border-t border-gray-200" />
  <span className="px-2 text-sm text-gray-500">Today</span>
  <hr className="w-full border-t border-gray-200" />
</div>

          <h2 className="text-lg font-semibold mb-4 text-gray-500">
            Here is the analysis about who might win this match! Keep digging Amigos!
          </h2>

          <div className='flex justify-center text-black'>
            <div className='flex align-middle h-1 border-black bg-black w-200'></div>

          </div>
          <div className="flex items-center my-4">
  <span className="text-black font-semibold">All probabilities</span>
  <hr className="flex-grow border-t border-gray-200 ml-4" />
</div>

        

          {/* <div className=" p-6 rounded-lg shadow mb-8 md:w-1/2 "> */}
     
            {/* <div className="bg-[#FF7640] p-6 rounded-lg  mb-4"> */}
            <div className="bg-[#FF7640] p-6 rounded-lg shadow  md:w-1/2 ">
              <p className="text-4xl font-bold  mb-2">17%</p>
              <p className="text-lg text-gray-700">chances of India winning</p>
            </div>

            {/* Parameters Adjustments */}
            {/* <div className="mb-4 bg-[#F5F5F5] "> */}
            <div className="bg-[#F5F5F5]  p-6 rounded-lg shadow  md:w-1/2 ">
              <label className="block text-gray-700 mb-2">Adjust these parameters for more insight.</label>
              <div className="grid grid-cols-1 ">
                <div className='flex items-center justify-between gap-2'>
                  <label className="block text-gray-700 mb-1">Runs in powerplay</label>
                  <select className=" p-1 text-center m-2 w-40 border text-gray-700 border-gray-300 rounded-lg">
                    <option>20-30</option>
                  </select>
                </div>
                <div className='flex items-center justify-between gap-2' >
                  <label className="block text-gray-700 mb-1">Wickets in powerplay</label>
                  <select className="p-1 text-center m-2 w-40 border text-gray-700 border-gray-300 rounded-lg">
                    <option>1</option>
                  </select>
                </div>
                <div className='flex items-center justify-between gap-2'>
                  <label className="block text-gray-700 mb-1">Runs in death overs</label>
                  <select className="p-1 text-center m-2 w-40 border text-gray-700 border-gray-300 rounded-lg">
                    <option>50</option>
                  </select>
                </div>
                <div className='flex items-center justify-between gap-2'>
                  <label className="block text-gray-700 mb-1">End of first innings score</label>
                  <select className="p-1 text-center m-2 w-40  border text-gray-700 border-gray-300 rounded-lg">
                    <option>180</option>
                  </select>
                </div>
                
                </div> 

               </div>
            {/* </div>
           */}

          {/* Spoda Stats Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
   
            <div className="flex items-center my-4">
  <span className="text-black font-semibold">Spoda Stats 1/2</span>
  <hr className="flex-grow border-t border-gray-200 ml-4" />
</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-start">
                <p className="text-2xl font-bold text-gray-800 mb-2">24%</p>
                <p className="text-gray-700">Aus wins, if they take more than 2 wickets in overs 1-6</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-start">
                <p className="text-2xl font-bold  text-gray-800 mb-2">24%</p>
                <p className="text-gray-700">Aus wins, if they take more than 2 wickets in overs 1-6</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-start">
                <p className="text-2xl font-bold text-gray-800 mb-2">24%</p>
                <p className="text-gray-700">Aus wins, if they take more than 2 wickets in overs 1-6</p>
              </div>
            </div>
          </div>

          {/* Ask Spoda Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            {/* <h3 className="text-lg font-semibold mb-4 text-gray-800">Dig Deeper with Ask Spoda</h3> */}
            <div className="flex items-center my-4">
  <span className="text-black font-semibold">Dig Deeper with Ask Spoda</span>
  <hr className="flex-grow border-t border-gray-200 ml-4" />
</div>
            <div className="flex flex-row flex-wrap gap-3 justify-start text-[0.5rem]">
              <button className="flex items-center w-200 px-4 py-2 bg-[#E6F4D7] text-black rounded-lg border-[#CEEAB0]">
                 <Right /> &nbsp;India's winning chances if they score over 150?
              </button>
              <button className="flex items-center w-200 px-4 py-2 bg-[#E6F4D7] text-black rounded-lg border-[#CEEAB0]">
                 <Right /> &nbsp;India's winning chances if they score over 150?
              </button>
              <button className="flex items-center w-200 px-4 py-2 bg-[#E6F4D7] text-black rounded-lg border-[#CEEAB0]">
                 <Right /> &nbsp;India's winning chances if they score over 150?
              </button>
              <button className="flex items-center w-200 px-4 py-2 bg-[#E6F4D7] text-black rounded-lg border-[#CEEAB0]">
                 <Right /> &nbsp;India's winning chances if they score over 150?
              </button>
           
              
            </div>
          </div>
          {/* Ask Question Box */}
          <div className="flex flex-row gap-2 items-center bg-white p-6 rounded-lg shadow">
            <input
              type="text"
              placeholder='Ask questions like "Which bowler in KKR takes the most wickets in powerplay"?'
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button className="">
              <img src={Submit} alt="submit" width={25} height={25}/>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;





// import React from 'react';
// import Sidebar from './components/Sidebar';
// import MainContent from './components/MainContent';
// import './index.css';

// const App = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <MainContent />
//     </div>
//   );
// };

// export default App;



