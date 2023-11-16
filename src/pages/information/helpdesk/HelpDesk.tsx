import { Col, Container, Row } from 'react-bootstrap';
import MainLayout from 'layouts/main';
import HelpDeskHero from './HelpDeskHero';
import FaqHelpLinks from './HelpLinks';

// dummy data
import { helpLinks } from './data';
import SupportCenter from './SupportCenter';

const HelpDesk = () => {
    return (
        <MainLayout title="FAQs" hero={<HelpDeskHero />}>
            <section className="section py-5 py-lg-8 mb-5 mb-sm-0 position-relative">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <FaqHelpLinks helpLinks={helpLinks} />
                            {/* <FAQs /> */}
                        </Col>
                        <Col lg={4}>
                            <SupportCenter />
                        </Col>
                    </Row>
                </Container>
            </section>
        </MainLayout>
    );
};

export default HelpDesk;
