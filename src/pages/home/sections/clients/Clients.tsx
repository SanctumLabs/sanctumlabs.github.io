import { Badge, Col, Container, Row } from 'react-bootstrap';

type ClientProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    brands: Client[];
};

const Clients = ({
    brands,
    title = 'Our Customers',
    subtitle = 'We are working with top companies',
    description = 'We strive to create experiences that are unique for our clients & expose their brand that uniquely sets them apart in the market',
}: ClientProps) => {
    return (
        <section className="section py-4 py-sm-8 bg-soft-orange position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row className="py-4">
                    <Col lg={11}>
                        <Row>
                            <Col lg={12}>
                                <Badge pill bg="" className="badge-soft-orange px-2 py-1 mb-2">
                                    {title}
                                </Badge>
                            </Col>
                            <Col lg={6}>
                                <h1 className="display-5 fw-semibold mb-1">{subtitle}</h1>
                            </Col>
                            <Col lg={6} className="ps-6">
                                <p className="mt-2 text-secondary">
                                    {description}
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            {(brands || []).map(({ icon }, index) => {
                                return (
                                    <Col key={index.toString()}>
                                        <img src={icon} alt="brand" height="32" className="mb-2 mb-xl-0" />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="divider bottom d-none d-sm-block"></div>
        </section>
    );
};

export default Clients;
