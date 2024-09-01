'use client'

import React, { ChangeEvent, useState } from 'react'
import { Prefecture } from '@/_types/prefecture'

type PrefecturesCheckboxProps = {
  prefectures: Prefecture[]
}

const PrefecturesCheckbox = (props: PrefecturesCheckboxProps) => {
  const { prefectures } = props

  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const prefCode = parseInt(e.target.id)
    setCheckedPrefectures((prev) => {
      return e.target.checked
        ? [...prev, prefCode]
        : prev.filter((code) => code !== prefCode)
    })
  }
  return (
    <>
      <div className="flex flex-wrap text-lg">
        {prefectures.map((prefecture) => (
          <div key={prefecture.prefCode} className="w-[100px] py-2">
            <input
              type="checkbox"
              id={`${prefecture.prefCode}`}
              onChange={handleChange}
              checked={checkedPrefectures.includes(prefecture.prefCode)}
            />
            <label htmlFor={`${prefecture.prefCode}`}>
              {prefecture.prefName}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default PrefecturesCheckbox
