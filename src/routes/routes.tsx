import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import LoadComponent from 'components/loadcomponent';

const Home = lazy(() => import('../pages/home'));

const miscRoutes: RouteObject[] = [
    {
        path: '',
        element: <LoadComponent component={Home} />,
    },
];

export default [...miscRoutes];
