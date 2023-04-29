import axios from 'axios';

// const fetchCompanies = async (max:number, postcode:string, from: string) => {
//     // const result = await get(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${max}&resultsFrom=${from}&streetAddressPostCode=${postcode}`)
//     const result = await axios.get(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${max}&resultsFrom=${from}&streetAddressPostCode=${postcode}`)
//     const data = result.data
//     findComFunc()
//     return data
// }
// const findComFunc = () => {}
// const companies = fetchCompanies(2, "70100", "2022-09-15")
// console.log(companies)
interface Companies {
    
}

const fetchCompanies = async (max:number, from: string, postCode:string) => {
    // const data = await axios.get(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${max}&resultsFrom=${from}&streetAddressPostCode=${postcode}`)
    const data = await fetch(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${max}&resultsFrom=${from}&streetAddressPostCode=${postCode}`)
    const result = data.json()
    console.log(result)
    return result
    // smallFunc()
}
// const smallFunc = () => {}
// const companies = fetchCompanies(30, "02700", "2020-09-15")
// console.log(companies)   
fetchCompanies(5, "2020-09-15", "70100", );
