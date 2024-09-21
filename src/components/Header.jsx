// Header.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'; // Import faBars
import spoda from "./assets/spoda.jpg";

const Header = () => {
  return (
    <>
               <div className="flex items-center justify-between p-4  md:hidden bg-white shadow-md">
                     <i className="fas fa-bars text-2xl text-gray-800"></i>
                     <h1 className="text-xl font-semibold text-gray-800">spoda.ai</h1>
                     <div className="flex items-center">
                       
                     </div>
          </div>
            
          {/*  Spoda Hamburger and Icon in mobile view */}
           <div className=" md:hidden border  rounded-md w-full  mx-auto ">
            
      
       <nav className="flex  m items-center justify-between bg-white p-2">
        
        <button className="text-black text-2xl ml-2">
           <FontAwesomeIcon icon={faBars} />
         </button>

      
        <div className="flex items-center mb-2  ">
             <img src={spoda} alt="Spoda" width={150} height={100} />
      
        </div> 

      
         <div className="mr-5"></div>
       </nav>
    </div>

    
     
           <header className="flex flex-col items-start justify-center gap-3  bg-white">
         <div className="flex items-center mt-5">
       <h1 className="text-2xl font-bold ml-5 text-gray-800">India vs Australia</h1>
      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
     </div>
     

         
           <div className="flex space-x-2 text-[0.7rem] ml-5">
             <button className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-green-200">
               Match Winner
             </button>
             <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-green-200">
              Toss Winner
             </button>
             <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-green-200">
               Top Batsman
             </button>
             <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-green-200">
               Top Bowler
             </button>
             <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-green-200">
               Runs
             </button>
           </div>
         </header>


    </>
  );
};

export default Header;
