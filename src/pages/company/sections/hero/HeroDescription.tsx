import { ReactNode } from 'react';

type HeroDescriptionProps = {
    content?: ReactNode;
};

const HeroDescription = ({
    content = "We are a full-stack web development studio, run by people who are very passionate about making the web more beautiful"
}: HeroDescriptionProps) => {
    return <p className="mt-3 fs-17">{content}</p>;
};

export default HeroDescription;
