interface SwipeCardWrapperProps {
    children: React.ReactNode
}

export const SwipeCardWrapper = ({ children }: SwipeCardWrapperProps) => {
    return <div className="h-full relative flex w-full rounded-2xl border-2 border-black bg-lightShade ">{children}</div>
}
