import { Link } from "react-router-dom";

const FeatureYx1 = () => {
  return (
    <section className="w-5/6 grid gap-y-6 mt-8 md:grid-flow-col md:w-full md:gap-x-3 md:grid-rows-[340px] md:grid-cols-[1fr,1fr] lg:gap-x-8">
      <div className="flex flex-row md:flex-col items-center w-full justify-stretch bg-orange rounded-lg h-full mr-4">
        <picture className="w-full h-full">
          <source
            media="(min-width: 1440px)"
            srcSet="/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            src="/home/mobile/image-earphones-yx1.jpg"
            alt=""
            className="h-full w-full object-cover rounded-lg md:h-full"
          />
        </picture>
      </div>
      <div className="flex flex-col items-start w-full justify-center bg-grey rounded-lg h-full">
        <h2 className="text-4xl uppercase font-bold text-black my-8 mx-8">Yx1 Earphones</h2>
        <Link to="/details/yx1-earphones" className="uppercase bg-transparent text-sm my-4 px-8 mx-8 py-4 tracking-widest border-2 border-black">See Product</Link>
      </div>
    </section>
  );
};

export default FeatureYx1;