type yearData = {
  year: number
  value: number
}

type yearDatas = {
  label: string
  data: yearData[]
}

export type populationStruct = {
  boundaryYear: number
  data: yearDatas
}
