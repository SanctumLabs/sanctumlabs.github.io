import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import LoadComponent from 'components/loadcomponent';
import { HOME_PAGE_ROUTE, LANDING_PAGE_ROUTE } from './constants';

const Home = lazy(() => import('../pages/home'));

type PageRoute = {
    title: string;
    isPrivate?: boolean;
} & RouteObject

const miscRoutes: PageRoute[] = [
    {
        title: 'Home',
        path: LANDING_PAGE_ROUTE,
        element: <LoadComponent component={Home} />,
    },
    {
        title: 'Home',
        path: HOME_PAGE_ROUTE,
        element: <LoadComponent component={Home} />,
    },
];

export default [...miscRoutes];
