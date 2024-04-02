import { BarChart } from '@mui/x-charts/BarChart';
import { FC } from 'react';
type data={
  title:string,

}
export const BarChatCard:FC<data>=(props)=> {
  return (
    <>
      <div>{props.title}</div>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4] }, { data: [1] }, { data: [2] }]}
      width={500}
      height={300}
    />
    </>
  );
}