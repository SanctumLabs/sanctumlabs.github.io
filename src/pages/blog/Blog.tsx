import { Col, Container, Row } from 'react-bootstrap';
import MainLayout from 'layouts/main';
import BlogHero from './sections/hero';
import Tags from './components/tags';
import { BlogPostSquare } from './components/post';

// images
import hero from 'assets/images/blog/hero.jpg';

// TODO: to be removed when there is an API
import { tags, posts } from './data';

const Blog = () => {
    return (
        <MainLayout
            heroClassNames={`header-7`}
            heroStyles={{ background: `url(${hero}) no-repeat` }}
            overlay={<div className="overlay" />}
            navbarCSSClasses='navbar-dark'
            hero={
                <BlogHero
                    subtitle="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur
                    ratione voluptatem sequi nesciunt."
                    />
            }>
                <section className="pt-6 pb-4 position-relative">
                    <Container>
                        <Row classname="justify-content-lg-between">
                            <Col lg={12}>
                                <div className="d-flex align-items-center mb-5">
                                    <Tags title='Tags:' tags={tags} />
                                </div>
                            </Col>
                            <Col lg={12}>
                                {/* TODO: featured post and subscription form */}
                                {/* <Row data-aos="fade-up" data-aos-duration="300">
                                    <Col lg={8}>
                                        <BlogPost1 post={post1[0]} />
                                    </Col>

                                    <Col lg={4}>
                                        <SubscriptionForm />
                                    </Col>
                                </Row> */}

                                <Row className="mt-6" data-aos="fade-up">
                                    {posts.map((post) => (
                                        <Col lg={4} key={post.id}>
                                            <BlogPostSquare post={post} />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </MainLayout>
    );
};

export default Blog;
