import Image from "next/image"

export const BannerImage = () => {
    return (
        <div className="relative h-full">
            <Image
                src="/images/banner.jpeg"
                alt="Banner"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
        </div>
    );
};