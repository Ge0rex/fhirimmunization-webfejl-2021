import { Patient } from '../models/patient.model';



export const PATIENTS: Patient[] = [
    {
      id: '1',
      name: 'Kiss Jakab',
      gender: 'férfi',
      birthdate: new Date('1998-03-21'),
      address: 'Faragó utca 8.',
      immunizationing: false,
      status: 'completed',
      vaccinecode: 'Sinopharm',
      occurence: new Date('2021-03-21'),
      reasoncode: 'Travel vaccinations',
      route: 'Injection, intradermal'
    },
    {
      id: '2',
      name: 'Várhegyi Alex',
      gender: 'férfi',
      birthdate: new Date('2001-08-04'),
      address: 'Kovács utca 13.',
      immunizationing: false,
      status: 'completed',
      vaccinecode: 'Sinopharm',
      occurence: new Date('2021-03-21'),
      reasoncode: 'Travel vaccinations',
      route: 'Injection, intradermal'
    },
    {
      id: '3',
      name: 'Patkós Ferenc',
      gender: 'férfi',
      birthdate: new Date('1983-12-20'),
      address: 'Kossuth Lajos sugárút 23.',
      immunizationing: false,
      status: 'completed',
      vaccinecode: 'Sinopharm',
      occurence: new Date('2021-03-21'),
      reasoncode: 'Travel vaccinations',
      route: 'Injection, intradermal'
    },
    {
      id: '4',
      name: 'Makra Vivien',
      gender: 'nő',
      birthdate: new Date('2000-04-06'),
      address: 'Szent István körút 59.',
      immunizationing: false,
      status: 'completed',
      vaccinecode: 'Sinopharm',
      occurence: new Date('2021-03-21'),
      reasoncode: 'Travel vaccinations',
      route: 'Injection, intradermal'
    }
  ];
