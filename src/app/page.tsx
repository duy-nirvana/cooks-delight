import Image from "next/image";
import SubcribeBlock from "./components/SubcribeBlock";

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
      <section className="h-[577px] overflow-hidden rounded-4xl bg-[url(/hero-thumbnail.jpg)] bg-cover lg:bg-bottom bg-left relative mb-4">
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
      </section>

      <section className="p-10 bg-sky rounded-4xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 mb-4">
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
      </section>

      <section className="p-4 bg-primary pt-10 border border-dark/24 rounded-4xl mb-4">
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
      </section>

      <section className="bg-primary mt-20 mb-16">
        <div className="flex justify-center flex-col items-center mb-10">
          <div className="w-[426px] flex justify-center flex-col items-center text-center mb-10">
            <div className="bg-orange py-1 px-2 text-primary button-text mb-2 rounded-full">
              RECIPES
            </div>
            <h2 className="mb-3">EMBARK ON A JOURNEY</h2>
            <p className="paragraph-2">
              With our diverse collection of recipes we have something to
              satisfy every palate.
            </p>
          </div>
          <div className="flex lg:gap-4 flex-wrap gap-2 justify-center">
            <div className="button-text text-dark border-dark border bg-lemon px-6 py-3 rounded-full cursor-pointer">
              ALL
            </div>
            <div className="button-text text-dark/50 border border-dark/50 hover:text-dark/100 hover:border-dark/100 px-6 py-3 rounded-full cursor-pointer">
              VEGAN
            </div>
            <div className="button-text text-dark/50 border border-dark/50 hover:text-dark/100 hover:border-dark/100 px-6 py-3 rounded-full cursor-pointer">
              BREAKFAST
            </div>
            <div className="button-text text-dark/50 border border-dark/50 hover:text-dark/100 hover:border-dark/100 px-6 py-3 rounded-full cursor-pointer">
              LUNCH
            </div>
            <div className="button-text text-dark/50 border border-dark/50 hover:text-dark/100 hover:border-dark/100 px-6 py-3 rounded-full cursor-pointer">
              DINNER
            </div>
            <div className="button-text text-dark/50 border border-dark/50 hover:text-dark/100 hover:border-dark/100 px-6 py-3 rounded-full cursor-pointer">
              DESSERT
            </div>
            <div className="button-text text-dark/50 border border-dark/50 hover:text-dark/100 hover:border-dark/100 px-6 py-3 rounded-full cursor-pointer">
              QUICK BITE!
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-4xl border border-dark/24">
            <div className="relative">
              <img
                src="/recipe-2.png"
                className="object-cover object-center w-full max-h-60 rounded-t-4xl vegan"
              />
              {/* <div className="absolute bottom-0 right-5 translate-y-1/3 animate-[spin_8000ms_linear_infinite]">
                <img src="/vegan.svg" />
              </div> */}
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
          <div className="rounded-4xl border border-dark/24">
            <div className="relative">
              <img
                src="/recipe-2.png"
                className="object-cover object-center w-full max-h-60 rounded-t-4xl vegan"
              />
              {/* <div className="absolute bottom-0 right-5 translate-y-1/3 animate-[spin_8000ms_linear_infinite]">
                <img src="/vegan.svg" />
              </div> */}
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
          <div className="rounded-4xl border border-dark/24">
            <div className="relative">
              <img
                src="/recipe-2.png"
                className="object-cover object-center w-full max-h-60 rounded-t-4xl vegan"
              />
              {/* <div className="absolute bottom-0 right-5 translate-y-1/3 animate-[spin_8000ms_linear_infinite]">
                <img src="/vegan.svg" />
              </div> */}
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
          <div className="rounded-4xl border border-dark/24">
            <div className="relative">
              <img
                src="/recipe-2.png"
                className="object-cover object-center w-full max-h-60 rounded-t-4xl vegan"
              />
              {/* <div className="absolute bottom-0 right-5 translate-y-1/3 animate-[spin_8000ms_linear_infinite]">
                <img src="/vegan.svg" />
              </div> */}
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
          <div className="rounded-4xl border border-dark/24">
            <div className="relative">
              <img
                src="/recipe-2.png"
                className="object-cover object-center w-full max-h-60 rounded-t-4xl vegan"
              />
              {/* <div className="absolute bottom-0 right-5 translate-y-1/3 animate-[spin_8000ms_linear_infinite]">
                <img src="/vegan.svg" />
              </div> */}
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
      </section>

      <section className="border border-dark/24 rounded-4xl p-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="pl-6 flex items-start flex-col lg:col-span-4 justify-end mb-5">
            <div className="button-text py-1 px-2 text-primary bg-orange rounded-full mb-2">
              ABOUT US
            </div>
            <h2 className="mb-3">OUR CULINARY CHRONICLE</h2>
            <p className="paragraph-2 mb-3">
              Our journey is crafted with dedication, creativity, and an
              unrelenting commitment to delivering delightful culinary
              experiences. Join us in savoring the essence of every dish and the
              stories that unfold.
            </p>
            <button className="button-text rounded-full border text-dark py-3 px-6">
              READ MORE
            </button>
          </div>
          <img
            src="/pork.png"
            className="lg:col-start-6 lg:col-span-3 w-full lg:h-full h-80 object-cover rounded-4xl object-center"
          />
          <img
            src="/prepare-food.png"
            className="lg:col-span-4 lg:row-span-2 lg:h-full h-80 object-cover w-full rounded-4xl object-center lg:order-0 order-1"
          />
          <img
            src="/dish.png"
            className="lg:col-span-8 w-full lg:h-full h-80 object-cover rounded-4xl object-bottom"
          />
        </div>
      </section>

      <SubcribeBlock />
    </div>
  );
}
