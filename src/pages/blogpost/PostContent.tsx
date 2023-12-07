import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { FC } from 'react';

type PostContentProps = {
    // gallery: GalleryItem[];
    tags: Tag[];
    content: string;
};

const PostContent: FC<PostContentProps> = ({ tags }) => {
    return (
        <section className="position-relative pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        {/* TODO: POST CONTENT */}

                        {/* tags */}
                        <div className="mt-5">
                            {tags.map(({ id, name, slug }) => (
                                <Link className="btn btn-sm btn-soft-secondary mb-1 me-1" to={`/tags/${slug}`}>
                                    {name}
                                </Link>
                            ))}
                        </div>

                        {/* social sharing */}
                        <ul className="list-inline mb-0 mt-4">
                            <li className="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">
                                Share:
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-primary" icon="facebook" />
                                </Link>
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-info" icon="twitter" />
                                </Link>
                            </li>
                            <li className="list-inline-item align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-danger" icon="instagram" />
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PostContent;
