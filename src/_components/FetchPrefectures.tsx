'use client'

import { getPrefectures } from '@/_api/resas'
import PrefecturesCheckbox from '@/_components/PrefecturesCheckbox'
import { Prefecture } from '@/_types/prefecture'
import { useEffect, useState } from 'react'

const FetchPrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const data = await getPrefectures()
        setPrefectures(data)
      } catch (error) {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading)
    return (
      <div className="h-[100px] flex justify-center items-center">
        Loading...
      </div>
    )
  if (error)
    return (
      <div className="h-[100px] flex justify-center items-center">
        都道府県一覧の取得に失敗しました
      </div>
    )

  return <PrefecturesCheckbox prefectures={prefectures} />
}

export default FetchPrefectures
