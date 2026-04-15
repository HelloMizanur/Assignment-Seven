import { FaHeartBroken, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDFDFD] text-center p-6 font-sans">
      <div className="mb-12 relative flex flex-col items-center">
        <div className="absolute -top-16 opacity-10">
          <FaHeartBroken size={220} className="text-[#146b7d]" />
        </div>

        <h1 className="text-[180px] font-black leading-none tracking-tighter text-[#146b7d] select-none">
          4<span className="text-emerald-500">0</span>4
        </h1>

        <div className="px-6 py-2 -mt-4 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
          Connection Broken
        </div>
      </div>

      <div className="max-w-md mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          It seems like the relationship with this page has drifted apart. We
          couldn't find the connection you were looking for.
        </p>
      </div>
      <Link
        to={"/"}
        className="group flex items-center gap-3 px-10 py-4 bg-[#146b7d] text-white rounded-full text-lg font-bold shadow-md hover:bg-[#115a69] transition-all duration-300 hover:shadow-lg active:scale-95"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
