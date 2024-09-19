import { Gallery } from "../../types";

interface GalleryProps {
    gallery: Gallery;
}

const GalleryBox: React.FC<GalleryProps> = ({gallery}) => {
    return (
        <div className="flex items-center justify-between mt-8">
            <div className="flex flex-col w-1/2 mr-4">
                <picture className="my-4">
                    <source
                        media="(min-width: 1440px)"
                        srcSet={gallery?.first.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={gallery?.first.tablet}
                    />
                    <img
                        src={gallery?.first.mobile}
                        alt=""
                        className="object-cover w-full rounded-lg h-[174px] object-top lg:h-[280px]"
                    />
                </picture>
                <picture className="my-4">
                    <source
                        media="(min-width: 1440px)"
                        srcSet={gallery?.second.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={gallery?.second.tablet}
                    />
                    <img
                        src={gallery?.second.mobile}
                        alt=""
                        className="object-cover w-full rounded-lg h-[174px] object-top lg:h-[280px]"
                    />
                </picture>
            </div>
            <div className="flex w-1/2 ml-4">
                <picture className="">
                    <source
                        media="(min-width: 1440px)"
                        srcSet={gallery?.third.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={gallery?.third.tablet}
                    />
                    <img
                        src={gallery?.third.mobile}
                        alt=""
                        className="object-cover w-full rounded-lg h-[368px] lg:h-[592px]"
                    />
                </picture>
            </div>
        </div>
    );
}

export default GalleryBox;