'use client'

import React, { useState } from 'react'

import GetPopulationStruct from '@/_components/PopulationStructs/GetPopulationStruct'
import FetchPrefectures from '@/_components/Prefectures/FetchPrefectures'

import { PopulationStruct } from '@/_types/populationStructs'
import { Prefecture } from '@/_types/prefecture'

const SearchPopulationStruct = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [checkedPrefectures, setCheckedPrefectures] = useState<Prefecture[]>([])
  const [populationStructs, setPopulationStructs] = useState<PopulationStruct[]>([])

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
