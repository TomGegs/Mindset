import { SwipeCardLayout } from "components/SwipeCard/SwipeCardLayout"
import { SwipeCardWrapper } from "components/SwipeCard/SwipeCardWrapper"

export default function Page() {
    return (
        <div className="relative flex h-[svh] w-screen flex-col">
            <SwipeCardWrapper>
                <SwipeCardLayout />
            </SwipeCardWrapper>
        </div>
    )
}
