export const sortCountriesByCasesDesc = (countries) => {
    return [...countries]
        .sort((a, b) => a.cases > b.cases ? -1 : 1)
}

export const sortCountriesByNewCasesDesc = (countries) => {
    return [...countries]
        .sort((a, b) => a.todayCases > b.todayCases ? -1 : 1)
}