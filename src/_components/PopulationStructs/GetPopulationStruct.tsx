'use client'

import React, { useEffect, useState } from 'react'

import PopulationStructsGraph from '@/_components/PopulationStructs/PopulationStructsGraph'

import { PopulationStruct, PopulationStructsIndex } from '@/_types/populationStructs'
import { Prefecture } from '@/_types/prefecture'

import { getPopulationStruct } from '@/_api/resas'

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
            const response = await getPopulationStruct(checkedPrefecture.prefCode)
            return response
          }),
        )
        setPopulationStructs(data)
      } catch (error) {
        console.error(error)
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    })()
  }, [checkedPrefectures])

  if (populationStructs.length === 0)
    return (
      <div className='flex h-[100px] items-center justify-center'>
        都道府県を追加してください
      </div>
    )
  if (loading)
    return <div className='flex h-[100px] items-center justify-center'>Loading...</div>
  if (error)
    return (
      <div className='flex h-[100px] items-center justify-center'>
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
      <div className='mx-auto flex max-w-[400px] justify-between pb-4'>
        <button
          onClick={() => setPopulationStructsIndex(0)}
          className='border-1 rounded-md border border-black bg-blue-500 p-2 text-white'
        >
          総人口
        </button>
        <button
          onClick={() => setPopulationStructsIndex(1)}
          className='border-1 rounded-md border border-black bg-blue-500 p-2 text-white'
        >
          年少人口
        </button>
        <button
          onClick={() => setPopulationStructsIndex(2)}
          className='border-1 rounded-md border border-black bg-blue-500 p-2 text-white'
        >
          生産年齢人口
        </button>
        <button
          onClick={() => setPopulationStructsIndex(3)}
          className='border-1 rounded-md border border-black bg-blue-500 p-2 text-white'
        >
          老年人口
        </button>
      </div>
    </>
  )
}

export default GetPopulationStruct
