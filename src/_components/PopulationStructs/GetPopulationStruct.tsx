'use client'

import { getPopulationStruct } from '@/_api/resas'
import PopulationStructsGraph from '@/_components/PopulationStructs/PopulationStructsGraph'
import { populationStruct } from '@/_types/populationStructs'
import React, { useEffect, useState } from 'react'

type GetPopulationStructProps = {
  checkedPrefectures: number[]
  populationStructs: populationStruct[]
  setPopulationStructs: (populationStructs: populationStruct[]) => void
}

const GetPopulationStruct = (props: GetPopulationStructProps) => {
  const { checkedPrefectures, populationStructs, setPopulationStructs } = props

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (checkedPrefectures.length === 0) return
    ;(async () => {
      try {
        const data = await Promise.all(
          checkedPrefectures.map(async (prefCode) => {
            const response = await getPopulationStruct(prefCode)
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
      <PopulationStructsGraph populationStructs={populationStructs} />
    </>
  )
}

export default GetPopulationStruct
