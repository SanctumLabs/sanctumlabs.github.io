import { ReactNode, Children, FC } from 'react';
import RootLayout from '../RootLayout';
import NavBar from 'components/navbar';
import Hero from 'components/hero';
import Footer from 'components/footer';

type MainLayoutProps = {
    /**
     * Optional page title
     */
    title?: string;

    /**
     * Hero section to be used for a page
     */
    hero?: typeof Children | ReactNode;

    /**
     * CSS class names for the wrapper of the hero section
     * defaults to header-4
     * Usage:
     * heroClassNames={"c1 c2 c3"}
     */
    heroClassNames?: string;

    /**
     * Page children
     * */
    children: typeof Children | ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ title, children, hero = <Hero />, heroClassNames = "header-4" }) => {
    return (
        <RootLayout title={title} description="Digital agency">
            <div className={heroClassNames}>
                <NavBar navClass="navbar-light" hideSearch fixedWidth buttonClass="btn-outline-secondary btn-sm" />
                <>{hero}</>
            </div>
            <>{children}</>
            <Footer />
        </RootLayout>
    );
};

export default MainLayout;
