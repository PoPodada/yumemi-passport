'use client'

import React, { ChangeEvent } from 'react'
import { Prefecture } from '@/_types/prefecture'
import { getRandomColor } from '@/_utils/createColor'

type PrefecturesCheckboxProps = {
  prefectures: Prefecture[]
  checkedPrefectures: Prefecture[]
  setCheckedPrefectures: React.Dispatch<React.SetStateAction<Prefecture[]>>
}

const PrefecturesCheckbox = (props: PrefecturesCheckboxProps) => {
  const { prefectures, checkedPrefectures, setCheckedPrefectures } = props

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const prefCode = parseInt(e.target.id)
    const lineColor = getRandomColor()
    setCheckedPrefectures((prev) => {
      return e.target.checked
        ? [
            ...prev,
            {
              prefCode: prefCode,
              prefName: prefectures[prefCode - 1].prefName,
              lineColor: lineColor,
            },
          ]
        : prev.filter((prefecture) => prefecture.prefCode !== prefCode)
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
              onChange={handleChangeCheckbox}
              checked={checkedPrefectures.some(
                (checkedPrefecture) =>
                  checkedPrefecture.prefCode === prefecture.prefCode
              )}
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
