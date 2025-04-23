import React from "react";
import { twMerge } from "tailwind-merge";

function SubcribeBlock({ className }: { className?: string }) {
  return (
    <section
      className={twMerge(
        "rounded-4xl py-16 bg-orange flex justify-center items-center flex-col text-center relative overflow-hidden",
        className
      )}
    >
      <div className="bg-light-orange opacity-90 inset-0  rounded-[50%] absolute top-0 -translate-y-3/5"></div>
      <div className="bg-light-orange opacity-90 inset-0  rounded-[50%] absolute bottom-0 translate-y-3/5"></div>
      <div className="mb-12 z-10">
        <p className="button-text mb-3 text-primary">SUBSCRIBE</p>
        <h1 className="text-primary mb-3">
          JOIN THE FUN <br />
          SUBCRIBE NOW!
        </h1>
        <p className="paragraph-1 text-primary">
          Subscribe to our newsletter for a weekly serving of recipes, cooking
          <br />
          tips, and exclusive insights straight to your inbox.
        </p>
      </div>
      <div className="relative w-[426px] z-10">
        <input
          placeholder="Email Address"
          className="bg-white py-4 rounded-full w-full h-full pr-32 pl-6"
        />
        <button className="bg-dark text-primary button-text px-6 py-3 absolute right-1 top-1">
          SUBCRIBE
        </button>
      </div>
    </section>
  );
}

export default SubcribeBlock;
