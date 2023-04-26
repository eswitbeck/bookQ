import { nanoid } from '@reduxjs/toolkit';

export const pending = [
  {
    id: nanoid(),
    position: 1,
    title: 'Ethics and the Limits of Philosophy',
    author: 'Williams, Bernard',
    year: 1985,
    doi: '',
    startDate: '2023-01-15',
    endDate: '',
  },
  {
    id: nanoid(),
    position: 2,
    title: 'Natural Moralities',
    author: 'Wong, David',
    year: 2006,
    doi: '',
    startDate: '2022-01-16',
    endDate: '',
  },
  {
    id: nanoid(),
    position: 3,
    title: 'The Dispossessed',
    author: 'Le Guin, Ursula K.',
    year: 1974,
    doi: '',
    startDate: '2020-07-20',
    endDate: '',
  },
  {
    id: nanoid(),
    position: 4,
    title: 'The Alchemist',
    author: 'Coelho, Paulo',
    year: 1988,
    doi: '',
    startDate: '2021-09-03',
    endDate: '',
  },
  {
    id: nanoid(),
    position: 5,
    title: 'Ducks',
    author: 'Beaton, Kate',
    year: 2022,
    doi: '',
    startDate: '2023-02-03',
    endDate: '',
  }
];

export const completed = [
  {
    id: nanoid(),
    position: 0,
    title: 'Our Wives Under the Sea',
    author: 'Armfield, Julia',
    year: '',
    doi: '',
    startDate: '2022-09-03',
    endDate: '2022-10-04',
  },
  {
    id: nanoid(),
    position: 1,
    title: 'The High Sierra',
    author: 'Robinson, Kim Stanley',
    year: '',
    doi: '',
    startDate: '2023-01-27',
    endDate: '2023-03-18',
  }
];
