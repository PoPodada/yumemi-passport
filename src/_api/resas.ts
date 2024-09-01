'use server'

import { Prefecture } from '@/_types/prefecture'
import { handleFailed, handleSuceed, path, headers } from './index'

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
