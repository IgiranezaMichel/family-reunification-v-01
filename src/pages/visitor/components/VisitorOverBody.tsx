import { ReactNode } from "react"

export const VisitorOverBody = (props: { children: ReactNode }) => {
    return (
        <main className="bg-dark text-white" style={{ transform: 'translate(0px,-30px' }}>
            {props.children}
        </main>
    )
}