import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon, InfoCircledIcon } from "@radix-ui/react-icons"
import { Button } from "components/ui/button"

export const MenuTray = () => {
    return (
        <div className="absolute right-1/2  translate-x-[50%] w-full bottom-0 grid h-24  grid-cols-4 items-center justify-center justify-items-center gap-2 bg-gradient-to-b from-darkShade/0 via-primaryColor/10 to-primaryColor ">
            <Button variant="round" size="icon">
                <ArrowLeftIcon />
            </Button>

            <Button variant="round" size="icon">
                <InfoCircledIcon />
            </Button>

            <Button variant="round" size="icon">
                <BookmarkIcon />
            </Button>

            <Button variant="round" size="icon">
                <ArrowRightIcon />
            </Button>
        </div>
    )
}
