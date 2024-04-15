import Image from "next/image"

type IconBioProps = {
    iconArray: string[]
}

const IconBio = ({ iconArray }: IconBioProps) => {
    return (
        <div className="flex flex-row p-6">
            {iconArray.map((icon: string, index: number) => (
                <Image
                    key={index}
                    alt="icon"
                    className="relative flex aspect-square h-8 w-8 rounded-md object-contain opacity-20"
                    height="25"
                    src={icon}
                    width="25"
                ></Image>
            ))}
        </div>
    )
}

export default IconBio
