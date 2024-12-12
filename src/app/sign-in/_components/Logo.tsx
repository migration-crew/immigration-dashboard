import Image from "next/image"

export const LogoImage = () => {
    return (
        <div className="">
            <Image
                src="/images/upImmigrationLogo.png"
                alt="Logo"
                width={215}
                height={102}
            />
        </div>
    );
};