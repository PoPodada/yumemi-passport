import { Prefecture } from '@/_types/prefecture'

type YearData = {
  year: number
  value: number
}

type YearsDatas = {
  label: YearsDatasLabel
  data: YearData[]
}

export type YearsDatasLabel =
  | '総人口'
  | '年少人口'
  | '生産年齢人口'
  | '老年人口'

export type PopulationStruct = {
  boundaryYear: number
  data: YearsDatas[]
  prefecture?: Prefecture
}

export type PopulationStructsIndex = 0 | 1 | 2 | 3
