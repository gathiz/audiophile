const Banner = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 w-5/6 items-start justify-between text-dark-gray h-[640px] my-4 pt-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <div className="flex flex-col md:col-start-1 w-full md:w-5/6 justify-center items-center h-full">
                <h1 className="text-3xl font-bold text-center md:text-start uppercase m-8 md:m-0">Bringing you the <span className="text-orange">best</span> audio gear</h1>
                <p className="text-center md:text-start mt-8 mr-8">Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                    rooms available for you to browse and experience a wide range of our products.
                    Stop by our store to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.</p>
            </div>
            <div className="w-full md:col-start-2 flex items-center justify-between h-full">
                <picture className="w-full">
                    <source
                        media="(min-width:1440px)"
                        srcSet="/shared-images/desktop/image-best-gear.jpg"
                    />
                    <source
                        media="(min-width:768px)"
                        srcSet="/shared-images/tablet/image-best-gear.jpg"
                    />
                    <img
                        src="/shared-images/mobile/image-best-gear.jpg"
                        alt=""
                        className="rounded-lg mb-10 md:mb-16 lg:mb-0 w-full"
                    />
                </picture>
            </div>
        </section>
    );
};

export default Banner;