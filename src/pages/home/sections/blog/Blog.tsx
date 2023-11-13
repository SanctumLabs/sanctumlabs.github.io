import { Link } from 'react-router-dom';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';

// images
import { ReactComponent as Bottom } from 'assets/images/shapes/bottom.svg';

type BlogProps = {
    title?: string;
    subtitle?: string;
    blogs: BlogPost[]
}

const Blog = ({ title = 'Blog', subtitle = 'Interesting Articles', blogs }: BlogProps) => {
    return (
        <section className="section pt-lg-8 pt-6 pb-5 position-relative">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            {title}
                        </Badge>
                        <h1 className="display-5 fw-semibold">{subtitle}</h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {(blogs || []).map(({ img, tag, time, title, description, link }, index) => {
                        return (
                            <Col md={4} key={index.toString()}>
                                <Card className="shadow" data-aos="fade-up" data-aos-duration="500">
                                    <div className="card-img-top-overlay">
                                        <div className="overlay"></div>
                                        <span className="card-badge top-right bg-secondary text-white">{tag}</span>

                                        <div className="position-relative">
                                            <img src={img} alt="blog" className="card-img-top" />

                                            <div className="shape text-white bottom">
                                                <Bottom />
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div className="mt-2">
                                            <Row className="align-items-center">
                                                <Col xs="auto">
                                                    <p className="mb-0">
                                                        <span className="fs-13 align-middle">{time}</span>
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="mt-2">
                                            <h4>
                                                <Link to="#" className="card-title-link">
                                                    {title}
                                                </Link>
                                            </h4>
                                            <p className="text-muted mb-2">
                                                {description}
                                                <Link to={link}>Read More</Link>
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Blog;
