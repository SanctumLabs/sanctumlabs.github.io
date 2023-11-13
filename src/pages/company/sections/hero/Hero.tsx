import { ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

type HeroProps = {
    title?: ReactNode
    description?: ReactNode
    button: ReactNode
    imageUrl: string
}

const Hero = ({ title, description, imageUrl, button }: HeroProps) => {
    return (
        <section className="position-relative hero-9">
            <div className="hero-top">
                <Container>
                    <Row className="py-7">
                        <Col>
                            {title}
                            {description}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="position-relative">
                {button}
            </div>
            <div className="hero-bottom">
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[{ image: imageUrl, speed: -55, style: { backgroundSize: 'contain' } }]}
                        className="hero-image"
                    />
                </ParallaxProvider>
            </div>
        </section>
    );
}

export default Hero;
