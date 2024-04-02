import { useGaugeState } from "@mui/x-charts";

export default function GaugePointer(props:{gougeColor:string}) {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
        return null;
    }
    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={5} fill="red" />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke={props.gougeColor}
                strokeWidth={3}
            />
        </g>
    );
}