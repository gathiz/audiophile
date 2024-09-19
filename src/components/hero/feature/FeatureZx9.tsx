import { Link } from "react-router-dom";

const FeatureZx9 = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 w-5/6 md:w-full content-center md:content-start rounded-lg h-[600px] md:h-[480px] bg-orange my-4 p-4">
            <div className="w-full md:w-1/2 m-4 overflow-hidden">
                <picture>
                    <source
                        media="(min-width: 1440px)"
                        srcSet="/home/desktop/image-speaker-zx9.png"
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet="/home/tablet/image-speaker-zx9.png"
                    />
                    <img
                        src="/home/mobile/image-speaker-zx9.png"
                        alt=""
                        className="w-[185.25px] mx-auto mt-8 md:mt-2 md:w-[380px] md:right-[unset] md:left-[130px] md:top-[100px]"
                    />
                </picture>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start md:justify-center mt-4 text-white">
                <p className="text-4xl font-bold uppercase mx-8 md:mx-0">Zx9</p>
                <p className="text-4xl font-bold mx-8 uppercase md:mx-0">Speaker</p>
                <p className="my-8 text-center md:text-start">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link to="/details/zx9-speaker" className="uppercase bg-hero-black text-bold text-sm py-4 mx-8 px-8 md:mx-0 tracking-widest 
                hover:bg-black-300 focus:bg-black-300">See Product</Link>
            </div>
        </section>
    );
};

export default FeatureZx9;