import { ReactNode, Children } from 'react';
import RootLayout from '../RootLayout';
import NavBar from 'components/navbar';
import Hero from 'components/hero';
import Footer from 'components/footer';

export type LandingLayoutProps = {
    /**
     * Hero section to be used for a page
     */
    hero?: typeof Children | ReactNode;

    /**
     * Page children
     * */
    children: typeof Children | ReactNode;
};

const LandingLayout = ({ children, hero = <Hero /> }: LandingLayoutProps) => {
    return (
        <RootLayout title="Technology company" description="Digital agency">
            <div className="header-4">
                <NavBar navClass="navbar-light" hideSearch fixedWidth buttonClass="btn-outline-secondary btn-sm" />
                <>{hero}</>
            </div>
            <>{children}</>
            <Footer />
        </RootLayout>
    );
};

export default LandingLayout;
