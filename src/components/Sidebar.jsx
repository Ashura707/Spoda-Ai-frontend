// Sidebar.jsx

import spoda from  "./assets/spoda.jpg";
import supportspod from "./assets/supportspod.jpg";
import men from "./assets/men.jpg"

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-white p-6 border-r border-gray-200 hidden md:flex flex-col justify-between">
      {/* Logo Section */}
      <div>
        <div className="flex items-center mb-8">
          <img src={spoda} alt="spoda logo" width={150} height={50} />
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

 
      <div>
        <div className="flex items-center mb-4">
          <img src={supportspod} alt="support" width={25} height={25} />
          <span className="text-lg font-medium ml-4">Support</span>
        </div>
        <div className="relative bg-gray-100 p-4 rounded-lg mb-4">

    <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        &times; 
    </button>
    <div className="flex items-center justify-between mb-2">
        <div className="relative flex items-center">
            
            <div className="w-12 h-12 rounded-full border-4 border-gray-300 flex items-center justify-center">
            
                <span className="absolute text-sm font-semibold text-gray-700">80%</span>
            </div>
        </div>
    </div>
    <p className="text-sm text-gray-500 mb-2">Used credits</p>
    <p className="text-sm text-gray-500">You have used 80% of your available credits. Need more?</p>
    <button className="text-sm text-gray-500 hover:text-gray-700">Dismiss</button>
    <button className="mt-2 ml-6 text-sm text-gray-500 hover:underline">Ask for more!</button>
</div>

<div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
    <div className="flex items-center">
      
        <img src={men} alt="support" className="w-10 h-10 rounded-full" />
        <p className="text-xs font-semibold text-gray-700 ml-2">olivia@untitledui.com</p>
    </div>

</div>

</div>
    </aside>
  );
};

export default Sidebar;
