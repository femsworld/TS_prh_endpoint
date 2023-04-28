import axios from 'axios';

const fetchCompanies = async (max:number, postcode:string, from: string) => {
    // const result = await get(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${max}&resultsFrom=${from}&streetAddressPostCode=${postcode}`)
    const result = await axios(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${max}&resultsFrom=${from}&streetAddressPostCode=${postcode}`)
    const data = result.data
    findComFunc()
    return data
}
const findComFunc = () => {}
const companies = fetchCompanies(2, "70100", "2020-09-15")
console.log(companies)