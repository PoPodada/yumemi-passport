type yearData = {
  year: number
  value: number
}

type yearsDatas = {
  label: yearsDatasLabel
  data: yearData[]
}

export type yearsDatasLabel =
  | '総人口'
  | '年少人口'
  | '生産年齢人口'
  | '老年人口'

export type populationStruct = {
  boundaryYear: number
  data: yearsDatas[]
}
