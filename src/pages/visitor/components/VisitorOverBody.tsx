import { ReactNode } from "react"

export const VisitorOverBody = (props: { children: ReactNode }) => {
    return (
        <main className="text-white col-12 bg-black" style={{ transform: 'translate(0px,-30px' }}>
            {props.children}
        </main>
    )
}