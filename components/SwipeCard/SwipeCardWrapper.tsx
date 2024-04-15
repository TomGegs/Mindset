interface SwipeCardWrapperProps {
    children: React.ReactNode
}

export const SwipeCardWrapper = ({ children }: SwipeCardWrapperProps) => {
    return (
        <div className="bg-lightShade relative flex h-fit w-fit rounded-2xl border-2 border-black p-12">{children}</div>
    )
}
