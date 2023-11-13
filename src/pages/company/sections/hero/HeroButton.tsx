import { Button } from 'react-bootstrap';

type HeroButtonProps = {
    text: string;
    onClick?: (e?: any) => void;
}

const HeroButton = ({ text, ...props }: HeroButtonProps) => {
    return (
        <div className="hero-cta">
            <Button variant="info" className="btn-cta" {...props}>
                {text}
            </Button>
        </div>
    )
}

export default HeroButton;
