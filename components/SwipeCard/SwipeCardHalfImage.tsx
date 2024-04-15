import Image from "next/image"
import IconBio from "components/IconsBio/IconBio"
import { Button } from "components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
// interface SwipeCardLayoutProps {
// }

export const SwipeCardHalfImage = () => {
    return (
        <Card className="relative h-full w-full overflow-hidden rounded-none bg-lightShade ">
            <Image
                alt="Product image"
                className="h-[25%] w-full object-cover"
                height="200"
                src="/images/psych1.png"
                width="200"
            />
            <CardHeader>
                <CardTitle className="text-black">Person Name</CardTitle>
                <CardDescription className="text-black">Type of Psychologist</CardDescription>
                <CardDescription className="text-black">Qualifications</CardDescription>
            </CardHeader>
            <IconBio iconArray={["/images/brainIcon.svg", "/images/brainIcon.svg", "/images/brainIcon.svg"]} />

            <CardContent>
                <div className="relative grid gap-2">
                    <div className="grid h-16 grid-cols-4 gap-2  bg-green-300 ">
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
