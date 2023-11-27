import { ReactNode, Children, FC, HTMLAttributes, CSSProperties } from 'react';
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
     * Overlay section to be used on the hero section
     */
    overlay?: typeof Children | ReactNode;

    /**
     * CSS class names for the wrapper of the hero section
     * defaults to header-4
     * Usage:
     * heroClassNames={"c1 c2 c3"}
     */
    heroClassNames?: string;

    /**
     * CSS styles
     */
    heroStyles?: CSSProperties | undefined;

    /**
     * NavBar CSS classes
     */
    navbarCSSClasses?: string;

    /**
     * Page children
     * */
    children: typeof Children | ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({
    title,
    children,
    hero = <Hero />,
    heroClassNames = 'header-4',
    navbarCSSClasses = 'navbar-light',
    heroStyles,
    overlay,
}) => {
    return (
        <RootLayout title={title} description="Digital agency">
            <div className={heroClassNames} style={heroStyles}>
                <>{overlay}</>
                <NavBar navClass={navbarCSSClasses} hideSearch fixedWidth buttonClass="btn-outline-secondary btn-sm" />
                <>{hero}</>
            </div>
            <>{children}</>
            <Footer />
        </RootLayout>
    );
};

export default MainLayout;
