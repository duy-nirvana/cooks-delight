import React from "react";

function Header({}) {
  return (
    <header className="sticky top-4 left-0 z-50 flex justify-center px-2">
      <div className="container p-4 border border-gray/24 rounded-4xl bg-background flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src="/icon/logo.svg" />
          <h1 className="font-bold leading-4">
            Cooks <br /> Delight
          </h1>
        </div>
        <div className="flex gap-6">
          <div className="p-2 pb-0 border-b-4 border-b-orange rounded hover:cursor-pointer">
            <p className="text-sm font-medium text-gray">HOME</p>
          </div>
          <div className="p-2">
            <p className="text-sm font-medium text-gray/50">RECIPES</p>
          </div>
          <div className="p-2">
            <p className="text-sm font-medium text-gray/50">COOKING TIPS</p>
          </div>
          <div className="p-2">
            <p className="text-sm font-medium text-gray/50">ABOUT US</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="p-2 bg-gray/8 rounded-2xl">
            <img src="/icon/search.svg" />
          </div>
          <button className="text-background bg-gray px-6 py-3 text-sm font-medium rounded-full">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
