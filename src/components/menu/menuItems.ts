import {
    ABOUT_US_PAGE_ROUTE,
    ABOUT_US_PAGE_TITLE,
    BLOG_PAGE_BASE_ROUTE,
    BLOG_PAGE_TITLE,
    COMPANY_PAGE_ROUTE,
    COMPANY_PAGE_TITLE,
    CONTACT_PAGE_BASE_ROUTE,
    CONTACT_PAGE_TITLE,
    FAQ_PAGE_ROUTE,
    FAQ_PAGE_TITLE,
    HOME_PAGE_TITLE,
    LANDING_PAGE_ROUTE,
    PORTFOLIO_PAGE_BASE_ROUTE,
    PORTFOLIO_PAGE_TITLE,
} from 'routes/constants';

type MenuItem = {
    name: string;
    link: string;
};

const menuItems: MenuItem[] = [
    {
        name: HOME_PAGE_TITLE,
        link: LANDING_PAGE_ROUTE,
    },
    {
        name: COMPANY_PAGE_TITLE,
        link: COMPANY_PAGE_ROUTE,
    },
    {
        name: PORTFOLIO_PAGE_TITLE,
        link: PORTFOLIO_PAGE_BASE_ROUTE,
    },
    {
        name: CONTACT_PAGE_TITLE,
        link: CONTACT_PAGE_BASE_ROUTE,
    },
    {
        name: BLOG_PAGE_TITLE,
        link: BLOG_PAGE_BASE_ROUTE,
    },
];

const informationMenuItems: MenuItem[] = [
    {
        name: ABOUT_US_PAGE_TITLE,
        link: ABOUT_US_PAGE_ROUTE,
    },
    {
        name: FAQ_PAGE_TITLE,
        link: FAQ_PAGE_ROUTE
    }
]

export {
    informationMenuItems
}

export default menuItems;
