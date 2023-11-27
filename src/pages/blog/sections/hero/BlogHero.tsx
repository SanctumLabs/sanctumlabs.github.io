import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type BlogHeroProps = {
    title?: string;
    subtitle: string;
}

const BlogHero: FC<BlogHeroProps> = ({ title = 'Blog', subtitle }) => {
    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center position-relative">
                        <h1 className="hero-title text-white">{title}</h1>
                        <p className="mt-4 fs-17 text-white">
                            {subtitle}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BlogHero;
