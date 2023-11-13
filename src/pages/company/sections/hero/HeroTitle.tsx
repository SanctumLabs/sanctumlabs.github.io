import { ReactNode } from 'react';

type HeroTitleProps = {
    content?: ReactNode;
};

const HeroTitle = ({
    content = (
        <>
            We are on a mission to <span className="highlight highlight-info d-inline-block">revolutionize</span> the
            web
        </>
    ),
}: HeroTitleProps) => {
    return (<h1 className="hero-title fw-bold">{content}</h1>);
};

export default HeroTitle;
