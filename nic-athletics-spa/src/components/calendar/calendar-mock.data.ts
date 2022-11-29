export interface Event {
  id: number;
  date: string;
  description: string;
  sport: SportType;
  venue: string;
  homeTeamImg: string;
  homeTeam: string;
  guestTeam: string;
  guestTeamImg: string;
  result: string;
}

export type SportType =
  | 'Soccer'
  | 'Volleyball'
  | 'IceHockey'
  | 'Football'
  | 'Baseball'
  | 'Basketball';

export const MOC_EVENTS: Event[] = [
  {
    id: 1,
    date: '2022-11-01T13:00',
    description: 'lorem ipsum',
    sport: 'IceHockey',
    venue: 'Burnaby, BC',
    homeTeam: 'SFU',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeam: '(W) Ice Hockey',
    result: '1:2',
  },
  {
    id: 2,
    date: '2022-11-01T13:00',
    description: 'lorem ipsum',
    sport: 'Soccer',
    venue: 'Comox Valley, BC',
    homeTeam: 'Soccer',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeam: 'WSU Cougars',
    result: '1:2',
  },
  {
    id: 3,
    date: '2022-11-03T13:00',
    description: 'lorem ipsum',
    sport: 'Volleyball',
    venue: 'Comox Valley, BC',
    homeTeam: 'Volleyball',
    guestTeam: 'Yotes',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
  {
    id: 4,
    date: '2022-11-04T13:00',
    description: 'lorem ipsum',
    sport: 'Basketball',
    venue: 'Vancouver, BC',
    homeTeam: '(W) Basketball',
    guestTeam: 'UBC',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
  {
    id: 5,
    date: '2022-11-04T13:00',
    description: 'lorem ipsum',
    sport: 'IceHockey',
    venue: 'Edmonton, AB',
    homeTeam: 'Ice Hockey',
    guestTeam: 'Golden Bears',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
  {
    id: 5,
    date: '2022-11-04T13:00',
    description: 'lorem ipsum',
    sport: 'IceHockey',
    venue: 'Edmonton, AB',
    homeTeam: 'Ice Hockey',
    guestTeam: 'Golden Bears',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
  {
    id: 6,
    date: '2022-11-06T13:00',
    description: 'lorem ipsum',
    sport: 'Football',
    venue: 'Cumberland, BC',
    homeTeam: 'Football',
    guestTeam: 'SFU',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
  {
    id: 7,
    date: '2022-11-07T13:00',
    description: 'lorem ipsum',
    sport: 'Volleyball',
    venue: 'Caldwell, ID,  USA',
    homeTeam: 'Volleyball',
    guestTeam: 'Yotes',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
  {
    id: 8,
    date: '2022-11-09T13:00',
    description: 'lorem ipsum',
    sport: 'Baseball',
    venue: 'Pullman, WA, USA',
    homeTeam: '(W) Baseball',
    guestTeam: 'WSU Cougars',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
  {
    id: 9,
    date: '2022-11-11T13:00',
    description: 'lorem ipsum',
    sport: 'Basketball',
    venue: 'Comox Valley, BC',
    homeTeam: '(W) Basketball',
    guestTeam: 'Yotes',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
  {
    id: 10,
    date: '2022-11-12T13:00',
    description: 'lorem ipsum',
    sport: 'Soccer',
    venue: 'Comox Valley, BC',
    homeTeam: 'NIC Men',
    guestTeam: 'UBC',
    result: '1:2',
    homeTeamImg: '/src/assets/nic-athletics-logo-64x.png',
    guestTeamImg: '/src/assets/nic-athletics-logo-64x.png',
  },
];
