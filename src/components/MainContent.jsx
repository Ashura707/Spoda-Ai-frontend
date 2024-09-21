import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Submit from "./assets/right-arrow.png"

import Right from "./Right"

const MainContent = () => {
  return (
    <div>
    <main className="flex-1 p-8 bg-white">
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
             {/* <div className="flex justify-start items-start text-[0.7rem]"> */}
             <div className="flex justify-between items-center text-[0.7rem] mb-2">
    <label className="block text-gray-500">Adjust these parameters for more insight.</label>
    <FontAwesomeIcon icon={faChevronDown} className="text-orange-500" />
</div>

               <div className="grid grid-cols-1 ">
                 <div className='flex items-center justify-between gap-2'>
                 <label className="block text-gray-900 font-bold mb-1 text-[0.8rem]">Runs in powerplay</label>

                   <select className=" p-1 text-center m-2 w-[5.5rem] border text-gray-700 border-gray-300 rounded-lg">
                     <option>20-30</option>
                   </select>
                 </div>
                 <div className='flex items-center justify-between gap-2' >
                   <label className="block text-gray-900 font-bold mb-1 text-[0.8rem]">Wickets in powerplay</label>
                   <select className="p-1 text-center m-2 w-[5.5rem] border text-gray-700 border-gray-300 rounded-lg">
                     <option>1</option>
                   </select>
                 </div>
                 <div className='flex items-center justify-between gap-2'>
                   <label className="block text-gray-900 font-bold mb-1 text-[0.8rem]">Runs in death overs</label>
                   <select className="p-1 text-center m-2 w-[5.5rem] border text-gray-700 border-gray-300 rounded-lg">
                     <option>50</option>
                   </select>
                 </div>
                 <div className='flex items-center justify-between gap-2'>
                   <label className="block text-gray-900 font-bold mb-1 text-[0.8rem]">End of first innings score</label>
                   <select className="p-1 text-start m-2 w-[5.5rem]  border text-gray-700 border-gray-300 rounded-lg">
                     <option>180</option>
                   </select>
                 </div>
                
                 </div> 

                </div>
             
             
           

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

export default MainContent;
