const baseEndpoint = "https://mindicador.cl/api"
export const CurrentIndicator = (indicator) => `${baseEndpoint}${indicator}`
export const indicatorYear = (indicator,year) => `${baseEndpoint}${indicator}/${year}`
export const indicatorAnyDate = (indicator, fullDate) => `${baseEndpoint}${indicator}/${fullDate}`
