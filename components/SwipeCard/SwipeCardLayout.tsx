import Image from "next/image"
import { Button } from "components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
// interface SwipeCardLayoutProps {
// }

export const SwipeCardLayout = () => {
    return (
        <Card className=" h-svh relative w-[300px] overflow-hidden bg-darkShade ">
            <Image
                alt="Product image"
                className="absolute aspect-square h-full w-full rounded-md object-cover opacity-20"
                height="200"
                src="/images/psych1.png"
                width="200"
            />
            <CardHeader>
                <CardTitle>Person Name</CardTitle>
                <CardDescription>Type of Psychologist</CardDescription>
                <CardDescription>Qualifications</CardDescription>
            </CardHeader>
            <div className="flex flex-row ">
                <Image
                    alt="brainIcon"
                    className="relative flex aspect-square h-8 w-8 rounded-md object-contain opacity-20"
                    height="25"
                    src="/images/brainIcon.svg"
                    width="25"
                ></Image>
                <Image
                    alt="brainIcon"
                    className="relative flex aspect-square h-8 w-8 rounded-md object-contain opacity-20"
                    height="25"
                    src="/images/brainIcon.svg"
                    width="25"
                ></Image>
                <Image
                    alt="brainIcon"
                    className="relative flex aspect-square h-8 w-8 rounded-md object-contain opacity-20"
                    height="25"
                    src="/images/brainIcon.svg"
                    width="25"
                ></Image>
                <Image
                    alt="brainIcon"
                    className="relative flex aspect-square h-8 w-8 rounded-md object-contain opacity-20"
                    height="25"
                    src="/images/brainIcon.svg"
                    width="25"
                ></Image>
            </div>
            <CardContent>
                <div className="relative grid gap-2">
                    <div className="grid h-16 grid-cols-3 gap-2  bg-green-300 ">
                        <Button>Button</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
