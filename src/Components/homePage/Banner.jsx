import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="text-center space-y-5">
        <h1 className="text-6xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-lg text-gray-600">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="bg-green-800 py-3 px-4 rounded-lg text-white cursor-pointer">
          + Add a Friend
        </button>
      </div>
      <div className="text-center pt-5 flex justify-center gap-4 flex-wrap">
        <div className="w-50 p-5 rounded-2xl bg-gray-200">
          <h3 className="text-4xl font-bold">10</h3> <p>Total Friends</p>
        </div>
        <div className="w-50  rounded-2xl p-5 bg-gray-200">
          <h3 className="text-4xl font-bold">10</h3> <p>On Track</p>
        </div>
        <div className="w-50 rounded-2xl  p-5 bg-gray-200">
          <h3 className="text-4xl font-bold">10</h3> <p>Need Attention</p>
        </div>
        <div className="w-50 rounded-2xl p-5 bg-gray-200">
          <h3 className="text-4xl font-bold">10</h3> <p>Interactions </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
