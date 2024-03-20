import { ReactNode } from "react"
import { StyleSheetProperties } from "react-native"

export type Url={
    title:string,
    link:string,
    icon?:ReactNode,
    style?:StyleSheetProperties,
    class?:ClassDecorator,
    active?:string
}