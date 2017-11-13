import React from 'react';
import HomeContainer from '../routes/home/HomeContainer';
import StoresContainer from '../routes/store/StoresContainer';
import EventsContainer from '../routes/event/EventsContainer';
import NotFoundContainer from '../routes/exception/404';

const routes = [
  {
    path: '/home',
    exact: true,
    sidebar: <div>sidebar!</div>,
    main: HomeContainer,
  },
  {
    path: '/stores',
    exact: true,
    sidebar: () => <div>sidebar!</div>,
    main: StoresContainer,
  },
  {
    path: '/events',
    exact: true,
    sidebar: () => <div>sidebar!</div>,
    main: EventsContainer,
  },
  {
    sidebar: () => <div>sidebar!</div>,
    main: NotFoundContainer,
  },
];

export default routes;
