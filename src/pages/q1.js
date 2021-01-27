import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import LeftNavbar from '../components/LeftNavbar'
import Navbar from '../components/Navbar'
import './design.css'

const toPercent = (decimal, fixed = 0) => `${(decimal * 1).toFixed(fixed)}%`

const Question = ({ SidebarData }) => {
  const { title } = SidebarData
  const { data } = SidebarData

  return (
    <div>
      <LeftNavbar />
      <div className="question">
        <Navbar />
        <div className="question-title">
          <h3>{data.name}</h3>
          <h4>{title}</h4>
        </div>
        <div className="testthegrapth">
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 100,
            }}
          >
            <CartesianGrid strokeDasharray="" />
            <XAxis dataKey="name" angle={-15} textAnchor="end" interval={0} stroke="white"/>
            <YAxis tickFormatter={toPercent} domain={[0, 60]} stroke="white" />
            <Tooltip
              cursor={{ fill: 'none', stroke: 'white', strokeWith: '8' }}
            />
            <Bar
              dataKey="percentage"
              tickFormatter={toPercent}
              fill="#ebebed"
            />
          </BarChart>
        </div>
      </div>
    </div>
  )
}

export default Question
