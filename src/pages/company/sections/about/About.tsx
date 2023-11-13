import { FC, ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type AboutProps = {
    title?: string;
    description: ReactNode;
}

const About: FC<AboutProps> = ({ title = 'About Us', description }) => {
    return (
        <section className="position-relative pt-8 pb-4">
            <Container>
                <Row data-aos="fade-up">
                    <Col lg={4}>
                        <span className="border border-top w-25 border-soft-primary d-block"></span>
                        <h1 className="display-5 fw-semibold mt-4">{title}</h1>
                    </Col>
                    {description}
                </Row>
            </Container>
        </section>
    );
};

export default About;
