import Image from "next/image"
import IconBio from "components/IconsBio/IconBio"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"

// interface SwipeCardLayoutProps {
// }

export const SwipeCardLayout = () => {
    return (
        <Card className="relative h-svh w-full content-end overflow-hidden rounded-none bg-darkShade ">
            <Image
                alt="Product image"
                className="absolute top-0 aspect-square h-full w-full object-cover opacity-20"
                height="200"
                src="/images/psych1.png"
                width="200"
            />
            <CardHeader>
                <CardTitle>Person Name</CardTitle>
                <CardDescription>Type of Psychologist</CardDescription>
                <CardDescription>Qualifications</CardDescription>
            </CardHeader>
            <IconBio iconArray={["/images/brainIcon.svg", "/images/brainIcon.svg", "/images/brainIcon.svg"]} />
            <CardContent>
                <div className="relative grid gap-2"></div>
            </CardContent>
        </Card>
    )
}
