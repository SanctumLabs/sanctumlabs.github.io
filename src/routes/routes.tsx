import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import LoadComponent from 'components/loadcomponent';
import {
    COMPANY_PAGE_ROUTE,
    CONTACT_PAGE_BASE_ROUTE,
    CONTACT_PAGE_TITLE,
    HOME_PAGE_ROUTE,
    LANDING_PAGE_ROUTE,
} from './constants';

const Home = lazy(() => import('pages/home'));
const Company = lazy(() => import('pages/company'));
const ContactUs = lazy(() => import('pages/contact'));

type PageRoute = {
    title: string;
    isPrivate?: boolean;
} & RouteObject;

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
    {
        title: 'Company',
        path: COMPANY_PAGE_ROUTE,
        element: <LoadComponent component={Company} />,
    },
    {
        title: CONTACT_PAGE_TITLE,
        path: CONTACT_PAGE_BASE_ROUTE,
        element: <LoadComponent component={ContactUs} />,
    },
];

export default [...miscRoutes];
