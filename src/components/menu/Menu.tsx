import { Nav, Dropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import menuItems, { informationMenuItems } from './menuItems';
import { INFORMATION_PAGE_TITLE } from 'routes/constants';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    let location = useLocation();

    const isActiveRoute = (path: string) => {
        if (location.pathname) {
            return location.pathname.includes(path);
        }
        return false;
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            {menuItems.map(({ name, link }) => (
                <Nav.Item as="li">
                    <NavLink to={link} end className={({ isActive }) => classNames('nav-link', { active: isActive })}>
                        {name}
                    </NavLink>
                </Nav.Item>
            ))}
            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarPages"
                    className={classNames(isActiveRoute('/pages') ? 'active' : '')}
                >
                    {INFORMATION_PAGE_TITLE} <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>
                <Dropdown.Menu renderOnMount>
                    <Nav as={'ul'} navbar={false}>
                        {informationMenuItems.map(({ name, link }) => (
                            <Nav.Item as="li">
                                <NavLink to={link} end className={({ isActive }) => classNames('nav-link', { active: isActive })}>
                                    {name}
                                </NavLink>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    );
};

export default Menu;
