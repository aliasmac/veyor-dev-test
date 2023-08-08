const fetchID = () => Math.random().toString(36).substring(2, 10);

import guy from './assets/guy.jpg';
import women from './assets//women.jpg';

export const kanbanStubs = {
  target: [
    {
      id: '123',
      fund: 'Index Ventures',
      website: 'www.indexventures.com',
      logo: '',
      contacts: [
        {
          name: 'Hannah Seal',
          src: women,
        },
        {
          name: 'Jack Kleeman',
          src: guy,
        },
      ],
      lastActivity: 'None',
      upComing: 'None',
      reminder: 'None',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
    {
      id: '456',
      fund: 'Index Venturs',
      website: 'www.indexventures.com',
      logo: '',
      contacts: [
        {
          name: 'Hannah Seal',
          src: women,
        },
        {
          name: 'Jack Kleeman',
          src: guy,
        },
      ],
      lastActivity: 'None',
      upComing: 'None',
      reminder: 'None',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
  ],
  contacted: [
    {
      id: '789',
      fund: 'Index Ventures',
      website: 'www.indexventures.com',
      logo: '',
      contacts: [
        {
          name: 'Hannah Seal',
          src: women,
        },
        {
          name: 'Jack Kleeman',
          src: guy,
        },
      ],
      lastActivity: 'None',
      upComing: 'None',
      reminder: 'None',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
  ],
  firstMeeting: [
    {
      id: '1011',
      fund: 'Index Ventures',
      website: 'www.indexventures.com',
      logo: '',
      contacts: [
        {
          name: 'Hannah Seal',
          src: women,
        },
        {
          name: 'Jack Kleeman',
          src: guy,
        },
      ],
      lastActivity: 'None',
      upComing: 'None',
      reminder: 'None',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
  ],
};
