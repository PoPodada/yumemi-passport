'use client'

import FetchPrefectures from '@/_components/Prefectures/FetchPrefectures'
import GetPopulationStruct from '@/_components/PopulationStructs/GetPopulationStruct'
import { populationStruct } from '@/_types/populationStructs'
import { Prefecture } from '@/_types/prefecture'
import React, { useState } from 'react'

const SearchPopulationStruct = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([])
  const [populationStructs, setPopulationStructs] = useState<
    populationStruct[]
  >([])

  console.log('prefectures', prefectures)
  return (
    <>
      <FetchPrefectures
        prefectures={prefectures}
        setPrefectures={setPrefectures}
        checkedPrefectures={checkedPrefectures}
        setCheckedPrefectures={setCheckedPrefectures}
      />
      <GetPopulationStruct
        checkedPrefectures={checkedPrefectures}
        populationStructs={populationStructs}
        setPopulationStructs={setPopulationStructs}
      />
    </>
  )
}

export default SearchPopulationStruct
