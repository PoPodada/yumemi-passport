import {
  PopulationStruct,
  PopulationStructsIndex,
} from '@/_types/populationStructs'
import { Prefecture } from '@/_types/prefecture'
import { createGraphData } from '@/_utils/graph'
import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from 'recharts'

type PopulationStructsGraphProps = {
  checkedPrefectures: Prefecture[]
  populationStructs: PopulationStruct[]
  populationStructsIndex: PopulationStructsIndex
}

const PopulationStructsGraph = (props: PopulationStructsGraphProps) => {
  const { checkedPrefectures, populationStructs, populationStructsIndex } =
    props
  const years = [
    '1960',
    '1965',
    '1970',
    '1975',
    '1980',
    '1985',
    '1990',
    '1995',
    '2000',
    '2005',
    '2010',
    '2015',
    '2020',
    '2025',
    '2030',
    '2035',
    '2040',
    '2045',
  ]

  const [graphData, setGraphData] = useState<YearPopulationData[]>([])
  const structs = {
    0: '総人口',
    1: '年少人口',
    2: '生産年齢人口',
    3: '老年人口',
  }
  useEffect(() => {
    if (
      checkedPrefectures.length === 0 ||
      populationStructs.length === 0 ||
      checkedPrefectures.length > populationStructs.length
    )
      return
    checkedPrefectures.forEach((checkedPrefecture, i) => {
      populationStructs[i]['prefecture'] = checkedPrefecture
    })
    const graphData = createGraphData(
      years,
      populationStructs,
      populationStructsIndex
    )
    setGraphData(graphData)
  }, [populationStructs, checkedPrefectures, populationStructsIndex])

  return (
    <div className="my-20">
      <p className="max-w-[700px] mx-auto text-xl font-bold">
        {structs[populationStructsIndex]}
      </p>
      <div className="flex items-center justify-center">
        <LineChart
          width={700}
          height={500}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {checkedPrefectures.map((checkedPrefecture) => (
            <Line
              type="monotone"
              dataKey={checkedPrefecture.prefName}
              stroke={checkedPrefecture.lineColor}
              activeDot={{ r: 8 }}
              key={checkedPrefecture.prefCode}
            />
          ))}
        </LineChart>
      </div>
    </div>
  )
}

export default PopulationStructsGraph
