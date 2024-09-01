'use server'

import { Prefecture } from '@/_types/prefecture'
import { handleFailed, handleSuceed, path, headers } from './index'
import { populationStruct } from '@/_types/populationStructs'

export const getPrefectures = async (): Promise<Prefecture[]> => {
  try {
    const response = await fetch(path('/api/v1/prefectures'), {
      method: 'GET',
      headers: headers,
    })
    return handleSuceed(response)
  } catch (error) {
    return handleFailed(error)
  }
}

export const getPopulationStruct = async (
  prefCode: number
): Promise<populationStruct> => {
  try {
    const params = `?cityCode=-&prefCode=${prefCode}`
    const response = await fetch(
      path(`/api/v1/population/composition/perYear${params}`),
      {
        method: 'GET',
        headers: headers,
      }
    )
    return handleSuceed(response)
  } catch (error) {
    return handleFailed(error)
  }
}
