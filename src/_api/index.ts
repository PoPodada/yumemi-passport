const baseUrl = 'https://opendata.resas-portal.go.jp'

export const apiKey = process.env.RESAS_API_KEY

export const path = (path: string) => `${baseUrl}${path}`

export const headers = {
  'Content-Type': 'application/json',
  'X-API-KEY': apiKey ?? '',
}

class FetchError extends Error {
  status: number
  responseMessage: string

  constructor(message: string, status: number, responseMessage: string) {
    super(message)
    this.status = status
    this.responseMessage = responseMessage
  }
}

export const isFetchError = (error: unknown) => {
  return error instanceof FetchError
}

export const handleSuceed = async (response: Response) => {
  if (response.status === 204) return ''
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json()
  if (!response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    throw new FetchError(response.statusText, response.status, data.message)
  }
  return data.result
}

export const handleFailed = (error: unknown) => {
  if (isFetchError(error)) {
    console.error(error)
  }
  throw error
}
