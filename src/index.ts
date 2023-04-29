import axios, { Axios, AxiosError } from 'axios';

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

interface Business {
    businessId: string;
    name: string;
    registrationDate: string;
    companyForm: string;
    detailsUri: string | null;
    liquidations: any[];
    names: Name[];
    auxiliaryNames: AuxiliaryName[];
    addresses: Address[];
    companyForms: CompanyForm[];
    businessLines: any[];
    languages: any[];
    registeredOffices: RegisteredOffice[];
    contactDetails: any[];
    registeredEntries: RegisteredEntry[];
    businessIdChanges: any[];
  }
  
  interface Name {
    order: number;
    version: number;
    name: string;
    registrationDate: string;
    endDate: string | null;
    source: number;
  }
  
  interface AuxiliaryName {
    order: number;
    version: number;
    name: string;
    registrationDate: string;
    endDate: string | null;
    source: number;
  }
  
  interface Address {
    careOf: string | null;
    street: string;
    postCode: string;
    type: number;
    version: number;
    city: string;
    country: string | null;
    registrationDate: string;
    endDate: string | null;
    language: string;
    source: number;
  }
  
  interface CompanyForm {
    version: number;
    name: string;
    type: string | null;
    registrationDate: string;
    endDate: string | null;
    language: string;
    source: number;
  }
  
  interface RegisteredOffice {
    order: number;
    version: number;
    name: string;
    registrationDate: string;
    endDate: string | null;
    language: string;
    source: number;
  }
  
  interface RegisteredEntry {
    authority: number;
    register: number;
    status: number;
    registrationDate: string;
    endDate: string | null;
    statusDate: string;
    language: string;
    description: string;
  }
  

const fetchCompanies = async <T>(maxResults :number, resultFrom: string, streetAddressPostCode:string) => {
    try {
        const result = await axios<T>(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}`)
        return result.data
        
    } catch (e) {
        const error = e as AxiosError //casting the error type
        console.log(error.message)
    }

    
 
}
// const smallFunc = () => {}
// const companies = fetchCompanies(30, "02700", "2020-09-15")
// console.log(companies)   
fetchCompanies(5, "2020-09-15", "70100", );
