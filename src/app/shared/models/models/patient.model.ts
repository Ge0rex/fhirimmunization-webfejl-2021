export interface Patient {
    id: string;
    name: string;
    gender: string;
    birthdate: Date;
    address: string;
    immunizationing: boolean;
    status: string;
    vaccinecode: string;
    occurence: Date;
    reasoncode: string;
    route: string;
  }
