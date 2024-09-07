import { PopulationStruct } from '@/_types/populationStructs'

export const createGraphData = (
  years: string[],
  populationStructs: PopulationStruct[],
  populationStructsIndex: 0 | 1 | 2 | 3
) => {
  return years.map((year, i) => {
    const data: YearPopulationData = { name: year }
    populationStructs.forEach((populationStruct) => {
      if (populationStruct.prefecture) {
        data[populationStruct.prefecture.prefName] =
          populationStruct.data[populationStructsIndex].data[i].value
      }
    })
    return data
  })
}
