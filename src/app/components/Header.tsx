"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function Header({}) {
  const [hasScrolled, setHasScrolled] = useState<Boolean>(false);

  useEffect(() => {
    if (window.scrollY > 80) {
      setHasScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        "sticky top-4 left-0 z-50 flex justify-center",
        hasScrolled && "top-0"
      )}
    >
      <div
        className={twMerge(
          "container p-4 border border-dark/24 rounded-4xl bg-primary flex justify-between items-center transition-colors",
          hasScrolled &&
            "bg-white/70 backdrop-blur-lg border-none shadow-lg rounded-t-none"
        )}
      >
        <div className="flex gap-2 items-center">
          <img src="/logo/main.svg" />
          <p className="font-bold leading-4">
            Cooks <br /> Delight
          </p>
        </div>
        <div className="flex gap-6">
          <div className="p-2 pb-0 border-b-4 border-b-orange rounded hover:cursor-pointer">
            <p className="button-text text-dark">HOME</p>
          </div>
          <div className="p-2">
            <p className="button-text text-dark/50">RECIPES</p>
          </div>
          <div className="p-2">
            <p className="button-text text-dark/50">COOKING TIPS</p>
          </div>
          <div className="p-2">
            <p className="button-text text-dark/50">ABOUT US</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="p-2 bg-dark/8 rounded-2xl">
            <img src="/icon/search.svg" />
          </div>
          <button className="text-primary bg-dark px-6 py-3 button-text rounded-full">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
