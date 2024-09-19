import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="h-[510px] lg:h-[640px] w-full bg-hero-black text-light-gray flex justify-center">
            <div className="flex w-full items-center justify-center
            lg:w-3/4 xl:w-2/3 2xl:w-1/2 md:items-center md:justify-start
            bg-[url(/home/hero-small.jpg) bg-no-repeat bg-[length:600px]
            lg:bg-[url(/home/hero.jpg)] lg:bg-[length:1600px]
            lg:bg-[right_-15rem_bottom_-2.5rem] bg-[center_top_-3.5rem]">
                <div className="flex flex-col lg:w-1/3 items-center md:items-start mx-8">
                    <h1 className="tracking-[0.6rem] uppercase">New Product</h1>
                    <h1 className="tracking-wide uppercase text-4xl text-center md:text-5xl md:text-start font-bold my-4">XX99 Mark II headphones</h1>
                    <p className="text-center p-4 m-4 md:text-start md:p-0 md:mx-0 md:mt-6">
                        Experience natural, lifelike audio and exceptional build quality
                        made for the passionate music enthusiast.
                    </p>
                    <Link to="/details/xx99-mark-two-headphones"
                    className="bg-orange font-bold text-sm uppercase py-4 px-8 md:mt-4
                    hover:text-black hover:bg-light-orange hover:text-black hover:bg-light-orange"
                    >See Product
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;