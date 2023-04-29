export default interface Business {
    businessId: string;
    name: string;
    registrationDate: string;
    companyForm: string;
    detailsUri: string;
    liquidations: any[];
    names?: Name[];
    auxiliaryNames?: AuxiliaryName[];
    addresses?: Address[];
    companyForms?: CompanyForm[];
    businessLines?: any[];
    languages?: any[];
    registeredOffices?: RegisteredOffice[];
    contactDetails?: any[];
    registeredEntries?: RegisteredEntry[];
    businessIdChanges?: any[];
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
  
  export default interface businessSearch {
    businessId: string
    name: string
    registrationDate: string
    companyForm: string
    detailsUri: string;
  }
