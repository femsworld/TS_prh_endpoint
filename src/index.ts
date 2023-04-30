import axios, { Axios, AxiosError } from "axios";
import Business from "./types";
import businessSearch from "./types";

type businessSearchArray = businessSearch[];
type businessIdSearchArray = Business[];

const fetchCompanies = async (
  maxResults: number,
  resultFrom: number,
  streetAddressPostCode: string
) => {
  try {
    const result = await axios(
      `https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}`
    );
    let businessSearchArrayResult = result.data.results as businessSearchArray;
    let resultOfSearchBusiness = [] as businessIdSearchArray;
    for (let item of businessSearchArrayResult) {
      try {
        const businessId_v1 = await axios(item.detailsUri);
        resultOfSearchBusiness = [
          ...resultOfSearchBusiness,
          ...businessId_v1.data.results,
        ]; //spread operator
      } catch (error) {}
    }
    return resultOfSearchBusiness;
  } catch (e) {
    const error = e as AxiosError; //casting the error type
    console.log(error.message);
  }
};
fetchCompanies(3, 0, "70100").then((data) => {
  console.log(data);
});
