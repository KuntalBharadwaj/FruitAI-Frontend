import { Handshake } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function HomeComponent() {
    const navigate = useNavigate()

    const handleClick = (e)=>{
        if(e == 'chat') navigate('/chat')
        if(e == 'translate') navigate('/translate')
        if(e == 'faqs') navigate('faqs')
        if(e == 'about') navigate('about')
    }


  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 gap-6 p-4">
        <div
          onClick={() => handleClick("chat")}
          className="bg-blue-300 shadow-lg shadow-blue-600 hover:shadow-2xl hover:shadow-blue-600 rounded-xl h-[127px] w-[127px] flex items-center justify-center transition duration-300 transform hover:scale-105"
        >
          <h2 className="text-[40px] font-bold text-violet-600 font-Dosis">
            Chat.
          </h2>
        </div>

        <div className="bg-orange-200 shadow-lg shadow-orange-500 hover:shadow-2xl hover:shadow-orange-500 rounded-xl h-[127px] w-[127px] flex items-center justify-center transition duration-300 transform hover:scale-105">
          <h2 className="text-lg font-bold text-white"></h2>
        </div>

        <div className="bg-green-200 shadow-lg shadow-green-500 hover:shadow-2xl hover:shadow-green-500 rounded-xl h-[127px] w-[127px] flex items-center justify-center transition duration-300 transform hover:scale-105">
          <h2 className="text-lg font-bold text-white"></h2>
        </div>

        <div
          onClick={() => handleClick("translate")}
          className="bg-yellow-200 shadow-lg shadow-yellow-500 hover:shadow-2xl hover:shadow-yellow-500 rounded-xl h-[127px] w-[127px] flex items-center justify-center transition duration-300 transform hover:scale-105"
        >
          <img src="/assets/googleTranslate.png" className="w-[60px]"></img>
        </div>

        <div
          onClick={() => handleClick("faqs")}
          className="bg-blue-200 shadow-lg shadow-blue-500 hover:shadow-2xl hover:shadow-blue-500 rounded-xl h-[127px] w-[127px] flex items-center justify-center transition duration-300 transform hover:scale-105"
        >
          <h2 className="text-[33px] font-bold text-violet-600 font-Dosis">
            FAQs
          </h2>
        </div>

        <div onClick={()=>handleClick('about')} className="bg-violet-200 shadow-lg shadow-violet-500 hover:shadow-2xl hover:shadow-violet-500 rounded-xl h-[127px] w-[127px] flex items-center justify-center transition duration-300 transform hover:scale-105">
          <h2 className="text-[30px] font-bold text-violet-600 font-Dosis">
            About
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
