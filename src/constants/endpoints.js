export const baseEndpoint = "https://mindicador.cl/api/"
export const currentIndicator = () => `${baseEndpoint}`
export const currentCustomIndicator = indicator => `${baseEndpoint}/${indicator}`
export const indicatorYear = (indicator,year) => `${baseEndpoint}${indicator}/${year}`
export const indicatorAnyDate = (indicator, fullDate) => `${baseEndpoint}${indicator}/${fullDate}`
