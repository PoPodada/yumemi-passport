'use client'

import { getPopulationStruct } from '@/_api/resas'
import PopulationStructsGraph from '@/_components/PopulationStructs/PopulationStructsGraph'
import {
  PopulationStruct,
  PopulationStructsIndex,
} from '@/_types/populationStructs'
import { Prefecture } from '@/_types/prefecture'
import React, { useEffect, useState } from 'react'

type GetPopulationStructProps = {
  checkedPrefectures: Prefecture[]
  populationStructs: PopulationStruct[]
  setPopulationStructs: (populationStructs: PopulationStruct[]) => void
}

const GetPopulationStruct = (props: GetPopulationStructProps) => {
  const { checkedPrefectures, populationStructs, setPopulationStructs } = props
  const [populationStructsIndex, setPopulationStructsIndex] =
    useState<PopulationStructsIndex>(0)

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (checkedPrefectures.length === 0) return
    ;(async () => {
      try {
        const data = await Promise.all(
          checkedPrefectures.map(async (checkedPrefecture) => {
            const response = await getPopulationStruct(
              checkedPrefecture.prefCode
            )
            return response
          })
        )
        setPopulationStructs(data)
      } catch (error) {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    })()
  }, [checkedPrefectures])

  if (populationStructs.length === 0)
    return (
      <div className="h-[100px] flex justify-center items-center">
        都道府県を追加してください
      </div>
    )
  if (loading)
    return (
      <div className="h-[100px] flex justify-center items-center">
        Loading...
      </div>
    )
  if (error)
    return (
      <div className="h-[100px] flex justify-center items-center">
        人口構成の取得に失敗しました
      </div>
    )
  return (
    <>
      <PopulationStructsGraph
        checkedPrefectures={checkedPrefectures}
        populationStructs={populationStructs}
        populationStructsIndex={populationStructsIndex}
      />
      <div className="flex justify-between pb-4 max-w-[400px] mx-auto">
        <button
          onClick={() => setPopulationStructsIndex(0)}
          className="bg-blue-500 border border-1 border-black rounded-md p-2 text-white"
        >
          総人口
        </button>
        <button
          onClick={() => setPopulationStructsIndex(1)}
          className="bg-blue-500 border border-1 border-black rounded-md p-2 text-white"
        >
          年少人口
        </button>
        <button
          onClick={() => setPopulationStructsIndex(2)}
          className="bg-blue-500 border border-1 border-black rounded-md p-2 text-white"
        >
          生産年齢人口
        </button>
        <button
          onClick={() => setPopulationStructsIndex(3)}
          className="bg-blue-500 border border-1 border-black rounded-md p-2 text-white"
        >
          老年人口
        </button>
      </div>
    </>
  )
}

export default GetPopulationStruct
