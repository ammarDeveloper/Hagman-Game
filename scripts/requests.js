const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else{
        throw new Error('Uable to do the work')
    }
}

const getCurrentCountry = async () => {
    const loction = await getLocation()
    const country = await getCountry(loction.country)
    return country
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    if (response.status = 200){
        let data = await response.json()
        data = data.find((item) => {
            return item.alpha2Code === countryCode
        })
        return data.name
    } else{
        throw new Error('Unable to get the data')
    }
}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=e4929ac5d593b4')
    if (response.status === 200){
        const data = await response.json()
        return data
    }else{
        throw new Error('Unable to get the loction')
    }
}