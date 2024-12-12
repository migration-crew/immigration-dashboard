import Image from "next/image"

type Props = {
    width: number;
    height: number;
}

export const LogoImage = ({ width, height }: Props) => {
    return (
        <div className="">
            <Image
                src="/images/upImmigrationLogo.png"
                alt="Logo"
                width={width}
                height={height}
            />
        </div>
    );
};