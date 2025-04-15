import React from "react";

function Footer({}) {
  return (
    <footer className="flex justify-center mb-4">
      <div className="bg-gray container px-10 py-6 rounded-4xl flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src="/icon/white-logo.svg" />
          <h1 className="font-medium leading-4 text-background">
            Cooks <br /> Delight
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
