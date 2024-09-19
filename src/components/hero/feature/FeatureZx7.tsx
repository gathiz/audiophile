import { Link } from "react-router-dom";

const FeatureZx7 = () => {
    return (
        <section className="relative flex flex-col items-start justify-center w-5/6 md:w-full rounded-lg h-[320px] mt-8 overflow-hidden">
            <div className="flex flex-col ml-12">
                <h2 className="text-black text-2xl uppercase font-bold z-10">Zx7 Speaker</h2>
                <Link to="/details/zx7-speaker" className="uppercase text-center bg-transparent text-bold text-sm my-4 py-4 tracking-widest 
                border-2 border-black z-10 hover:bg-hero-black hover:text-white">See Product</Link>
            </div>
            <picture className="absolute inset-0">
                <source
                    media="(min-width: 1440px)"
                    srcSet="/home/desktop/image-speaker-zx7.jpg"
                />
                <source
                    media="(min-width: 768px)"
                    srcSet="/home/tablet/image-speaker-zx7.jpg"
                />
                <img
                    src="/home/mobile/image-speaker-zx7.jpg"
                    alt=""
                    className="absolute top-0 left-0 h-full w-full object-cover rounded-lg"
                />
            </picture>
        </section>
    );
};

export default FeatureZx7;