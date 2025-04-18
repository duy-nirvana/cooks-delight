import Image from "next/image";

const foodTypeList: {
  icon: string;
  title: string;
}[] = [
  { icon: "/icon/breakfast.svg", title: "BREAKFAST" },
  { icon: "/icon/lunch.svg", title: "LUNCH" },
  { icon: "/icon/dinner.svg", title: "DINNER" },
  { icon: "/icon/dessert.svg", title: "DESSERT" },
  { icon: "/icon/quick-bite.svg", title: "QUICK BITE!" },
];

export default function Home() {
  return (
    <div>
      <div className="h-[577px] overflow-hidden rounded-4xl bg-[url(/hero-thumbnail.jpg)] bg-cover lg:bg-bottom bg-left relative mb-4">
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full text-center">
          <div className="mb-10">
            <h1 className="text-primary mb-3">
              UNLEASH CULINARY <br />
              EXCELLENCE
            </h1>
            <p className="paragraph-1 text-primary">
              Explore a world of flavors, discover <br />
              handcrafted recipes, and let the aroma of <br />
              our passion for cooking fill your kitchen
            </p>
          </div>
          <button className="bg-yellow button-text text-dark px-6 py-3">
            EXPLORE RECIPES
          </button>
        </div>
      </div>
      <div className="p-10 bg-sky rounded-4xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 mb-4">
        <div className="lg:col-span-5 flex justify-end flex-col items-start">
          <button className="text-primary px-2 py-1 bg-orange button-text mb-4">
            EXPLORE
          </button>
          <h2 className="mb-3">
            OUR DIVERSE <br />
            PALETTE
          </h2>
          <p className="paragraph-2 mb-10">
            If you are a breakfast enthusiast, a connoisseur of savory delights,
            or on the lookout for irresistible desserts, our curated selection
            has something to satisfy every palate.
          </p>
          <button className="border border-dark px-6 py-3">SEE MORE</button>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          {foodTypeList.map((foodType, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 border-b border-dark/16 last:border-0 mb-4 last:mb-0"
            >
              <img src={foodType.icon} />
              <p className="subtitle">{foodType.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-primary pt-10 border border-dark/24 rounded-4xl">
        <div className="ml-6 mb-10 flex justify-between">
          <h2>FEATURED RECIPES</h2>
          <div className="flex gap-2">
            <button
              className="border border-dark/40 rounded-full w-9 h-9 flex items-center justify-center"
              disabled
            >
              <img src="/icon/arrow-left.svg" />
            </button>
            <button className="border border-dark rounded-full w-9 h-9 flex items-center justify-center">
              <img src="/icon/arrow-right.svg" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-4xl border border-dark/24 flex flex-col">
            <img
              src="/recipe-1.png"
              className="object-cover object-center w-full max-h-60 rounded-t-4xl"
            />
            <div className="lg:p-6 p-4 flex flex-col justify-between grow">
              <div className="mb-10 grow">
                <h3 className="mb-3">Savory Herb-Infused Chicken</h3>
                <p className="paragraph-2">
                  Indulge in the rich and savory symphony of flavors with our
                  Savory Herb-Infused Chicken
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="small-text">40 MIN - EASY PREP - 3 SERVES</p>
                <button className="button-text border border-gray px-6 py-3">
                  VIEW RECIPE
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-4xl border border-dark/24">
            <div className="relative">
              <img
                src="/recipe-2.png"
                className="object-cover object-center w-full max-h-60 rounded-t-4xl vegan"
              />
              <div className="absolute bottom-0 right-5 translate-y-1/3 animate-[spin_8000ms_linear_infinite]">
                <img src="/vegan.svg" />
              </div>
            </div>
            <div className="lg:p-6 p-4">
              <div className="mb-10">
                <h3 className="mb-3">Decadent Chocolate Mousse</h3>
                <p className="paragraph-2">
                  Dive into the velvety indulgence of our Decadent Chocolate
                  Mousse. A dessert that transcends sweetness!
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="small-text">40 MIN - EASY PREP - 4 SERVES</p>
                <button className="button-text border border-gray px-6 py-3">
                  VIEW RECIPE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
