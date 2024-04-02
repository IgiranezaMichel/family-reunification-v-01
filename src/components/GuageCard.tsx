import { Card } from "@mui/material"
import { GaugeContainer, GaugeReferenceArc, GaugeValueArc } from "@mui/x-charts"
import GaugePointer from "./GuagePointer"
import { ReactNode } from "react"

export const GaugeCard=(props:{gaugeColor:string,gaugeTitle:string,gaugeValue:number,elevation?:number,cardClass?:string,children:ReactNode})=>{
    return (
        <Card className={props.cardClass} elevation={props.elevation}>
                <div className="bg-dark-subtle fw-bold p-2 fs-5">{props.gaugeTitle}</div>
                <GaugeContainer
                    width={200}
                    height={200}
                    startAngle={-110}
                    endAngle={110}
                    value={props.gaugeValue}
                    className="m-auto "
                >
                    <GaugeReferenceArc />
                    <GaugeValueArc />
                    <GaugePointer gougeColor={props.gaugeColor}/>
                    </GaugeContainer>
                    {props.children}
            </Card>
    )
}