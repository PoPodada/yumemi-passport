'use client'

import FetchPrefectures from '@/_components/FetchPrefectures'
import GetPopulationStruct from '@/_components/GetPopulationStruct'
import { populationStruct } from '@/_types/populationStructs'
import { Prefecture } from '@/_types/prefecture'
import React, { useState } from 'react'

const SearchPopulationStruct = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([])
  const [populationStructs, setPopulationStructs] = useState<
    populationStruct[]
  >([])

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
