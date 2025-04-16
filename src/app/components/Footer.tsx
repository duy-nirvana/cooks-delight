import React from "react";

function Footer({}) {
  return (
    <footer className="flex justify-center mb-4">
      <div className="bg-dark container px-10 py-6 rounded-4xl ">
        <div className="flex justify-between items-center border-b border-primary/8 pb-6 mb-4">
          <div className="flex gap-2 items-center">
            <img src="/logo/white-main.svg" />
            <p className="font-medium leading-4 text-primary">
              Cooks <br /> Delight
            </p>
          </div>
          <div className="flex">
            {["HOME", "RECIPES", "COOKING TIPS", "ABOUT US"].map((nav) => (
              <p
                key={nav}
                className="text-primary button-text border-r border-primary/8 px-4 last:border-0"
              >
                {nav}
              </p>
            ))}
          </div>
          <div className="flex gap-x-4">
            <img src="/icon/tiktok.svg" />
            <img src="/icon/facebook.svg" />
            <img src="/icon/instagram.svg" />
            <img src="/icon/youtube.svg" />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="small-text text-primary">
            COPYRIGHT: © 2024 COOKS DELIGHT.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
