'use client'

import { useEffect, useState } from 'react'

import PrefecturesCheckbox from '@/_components/Prefectures/PrefecturesCheckbox'

import { Prefecture } from '@/_types/prefecture'

import { getPrefectures } from '@/_api/resas'

type FetchPrefecturesProps = {
  prefectures: Prefecture[]
  setPrefectures: (prefectures: Prefecture[]) => void
  checkedPrefectures: Prefecture[]
  setCheckedPrefectures: React.Dispatch<React.SetStateAction<Prefecture[]>>
}

const FetchPrefectures = (props: FetchPrefecturesProps) => {
  const { prefectures, setPrefectures, checkedPrefectures, setCheckedPrefectures } = props

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const data = await getPrefectures()
        setPrefectures(data)
      } catch (error) {
        console.error(error)
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading)
    return <div className='flex h-[100px] items-center justify-center'>Loading...</div>
  if (error)
    return (
      <div className='flex h-[100px] items-center justify-center'>
        都道府県一覧の取得に失敗しました
      </div>
    )

  return (
    <PrefecturesCheckbox
      prefectures={prefectures}
      checkedPrefectures={checkedPrefectures}
      setCheckedPrefectures={setCheckedPrefectures}
    />
  )
}

export default FetchPrefectures
