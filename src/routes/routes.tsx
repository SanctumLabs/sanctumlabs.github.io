import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import LoadComponent from 'components/loadcomponent';
import {
    BLOG_PAGE_BASE_ROUTE,
    BLOG_PAGE_TITLE,
    COMPANY_PAGE_ROUTE,
    COMPANY_PAGE_TITLE,
    CONTACT_PAGE_BASE_ROUTE,
    CONTACT_PAGE_TITLE,
    HELP_DESK_PAGE_ROUTE,
    HOME_PAGE_ROUTE,
    HOME_PAGE_TITLE,
    INFORMATION_BASE_ROUTE,
    INFORMATION_PAGE_TITLE,
    LANDING_PAGE_ROUTE,
} from './constants';

const Home = lazy(() => import('pages/home'));
const Company = lazy(() => import('pages/company'));
const ContactUs = lazy(() => import('pages/contact'));
const HelpDesk = lazy(() => import('pages/information/helpdesk'));
const Blog = lazy(() => import("pages/blog"))
const BlogPost = lazy(() => import("pages/blogpost"))


type PageRoute = {
    title: string;
    isPrivate?: boolean;
} & RouteObject;

const blogRoutes: PageRoute[] = [
    {
        title: BLOG_PAGE_TITLE,
        path: BLOG_PAGE_BASE_ROUTE,
        children: [
            {
                path: '',
                element: <LoadComponent component={Blog} />
            },
            {
                path: ':slug',
                element: <LoadComponent component={BlogPost} />
            }
        ]
    }
]

const miscRoutes: PageRoute[] = [
    {
        title: HOME_PAGE_TITLE,
        path: LANDING_PAGE_ROUTE,
        element: <LoadComponent component={Home} />,
    },
    {
        title: HOME_PAGE_TITLE,
        path: HOME_PAGE_ROUTE,
        element: <LoadComponent component={Home} />,
    },
    {
        title: COMPANY_PAGE_TITLE,
        path: COMPANY_PAGE_ROUTE,
        element: <LoadComponent component={Company} />,
    },
    {
        title: CONTACT_PAGE_TITLE,
        path: CONTACT_PAGE_BASE_ROUTE,
        element: <LoadComponent component={ContactUs} />,
    },
    {
        title: INFORMATION_PAGE_TITLE,
        path: INFORMATION_BASE_ROUTE,
        children: [
            {
                path: HELP_DESK_PAGE_ROUTE,
                element: <LoadComponent component={HelpDesk}/>
            }
        ]
    }
];

export default [...miscRoutes, ...blogRoutes];
