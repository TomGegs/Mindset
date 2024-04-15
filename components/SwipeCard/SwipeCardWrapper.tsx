import { MenuTray } from "components/MenuTray/MenuTray"

interface SwipeCardWrapperProps {
    children: React.ReactNode
}

export const SwipeCardWrapper = ({ children }: SwipeCardWrapperProps) => {
    return (
        <div className="relative flex flex-col h-full w-full justify-center bg-lightShade ">
            {children}
            <MenuTray />
        </div>
    )
}
