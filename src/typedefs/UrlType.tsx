import { CSSProperties, ReactNode } from "react"

export type UrlType={
    title:string,
    link:string,
    icon?:ReactNode,
    style?:CSSProperties,
    class?:ClassDecorator,
}