import { populationStruct, yearsDatasLabel } from '@/_types/populationStructs'
import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, Tooltip, Legend } from 'recharts'

type PopulationStructsGraphProps = {
  populationStructs: populationStruct[]
}

const PopulationStructsGraph = (props: PopulationStructsGraphProps) => {
  const { populationStructs } = props

  const data = [
    {
      name: '1960',
      広島県: 4000,
      京都府: 2400,
    },
    {
      name: '1965',
      広島県: 3000,
      京都府: 1398,
    },
  ]

  return (
    <div className="flex items-center justify-center my-14">
      <LineChart width={700} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="広島県"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="京都府" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}

export default PopulationStructsGraph
