import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import LeftNavbar from '../components/LeftNavbar';
import './design.css'

const toPercent = (decimal, fixed = 0) => `${(decimal * 1).toFixed(fixed)}%`;

const Question = ({SidebarData}) => {
  const {title} = SidebarData
  const {data} =SidebarData
  
  return (
    <div>
     
    <LeftNavbar />
    <div className='question'>
      <div className='question-title'>
      <h1>{data.name}</h1>
      <h1>{title}</h1> 
      </div>
      <div classname='testthegrapth'>
      <BarChart 
      width={800}
      height={400}
      data={data}
      margin={{
        top: 0, right: 0, left: 0, bottom: 100,
      }}
      >
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="name"  angle={-15} textAnchor="end" interval={0}/>
      
      <YAxis tickFormatter={toPercent} domain={[0, 60]}/>
      <Tooltip />
      <Bar dataKey="percentage" tickFormatter={toPercent} fill="#8884d8" />
    </BarChart>
    </div>
   </div>
   </div>
  );
}


export default Question;