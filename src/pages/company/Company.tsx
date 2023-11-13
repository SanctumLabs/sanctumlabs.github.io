import { Col, Container, Row } from 'react-bootstrap';
import LandingLayout from 'layouts/landing';
import CompanyHero, { Hero } from './sections/hero';
import About from './sections/about';

// images

// TODO: fetch from CMS API
import coworking from 'assets/images/hero/coworking2.jpg';

const Company = () => {
    return (
        <LandingLayout
            hero={
                <CompanyHero
                    title={<Hero.Title />}
                    description={<Hero.Description />}
                    button={<Hero.Button text="Let's Have Talk" />}
                    imageUrl={coworking}
                />
            }>
            <About
                description={
                    <>
                        <Col lg={4}>
                            <p className="text-muted mb-4">
                                Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe
                                eveniet voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic
                                tenetur a sapiente delectus reiciendis.
                            </p>
                        </Col>
                        <Col lg={4}>
                            <p className="text-muted mb-4">
                                Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe
                                eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum
                                hic tenetur a sapiente delectus reiciendis.
                            </p>
                        </Col>
                        <Col lg={{ span: 8, offset: 4 }}>
                            <p className="text-muted">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </Col>
                    </>
                }
            />
        </LandingLayout>
    );
};

export default Company;
