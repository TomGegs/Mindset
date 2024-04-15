import Image from "next/image"
import { Button } from "components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
// interface SwipeCardLayoutProps {
// }

export const SwipeCardLayout = () => {
    return (
        <Card className=" bg-darkShade relative m-12 h-[500px] w-[500px] overflow-hidden ">
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
            <Image
                alt="brainIcon"
                className="relative flex aspect-square h-full w-full rounded-md object-cover opacity-20"
                height="200"
                src="/images/brainIcon.svg"
                width="200"
            ></Image>
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
