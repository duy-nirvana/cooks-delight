import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[577px] overflow-hidden rounded-4xl bg-[url(/hero-thumbnail.jpg)] bg-cover lg:bg-bottom bg-left relative">
      <div className="absolute inset-0 bg-dark/60"></div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full text-center">
        <h1 className="text-primary">
          UNLEASH CULINARY <br />
          EXCELLENCE
        </h1>
      </div>
    </div>
  );
}
