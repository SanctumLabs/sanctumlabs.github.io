import { FC } from 'react';
import { Col, Container, Row, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';


type PostNavigationProps = {
    currentPostTitle: string;
    authors: PostAuthor[];
    prevPostPopover: JSX.Element;
    nextPostPopover: JSX.Element;
};

const PostNavigation: FC<PostNavigationProps> = ({ currentPostTitle, authors, prevPostPopover, nextPostPopover }) => {
    return (
        <section className="position-relative pb-5">
            <Container>
                <Row className="border-top border-bottom py-4 align-items-center">
                    <Col lg={2} xs={6}>
                        <OverlayTrigger placement="top" overlay={prevPostPopover}>
                            <Link to="#" className="btn btn-white">
                                <i className="icon-xs icon-left-arrow me-2"></i>
                                <span className="d-none d-sm-inline-flex">Prev Post</span>
                            </Link>
                        </OverlayTrigger>
                    </Col>
                    <Col lg={{ offset: 1, span: 6 }}>
                        <div className="d-flex justify-content-lg-center py-lg-0 py-4">
                            <div className="d-flex align-items-center">
                                {/* FIXME: center avatars */}
                                {authors.map(({ name, avatarUrl, slug }) => (
                                    <>
                                        <img
                                            className="me-3 avatar avatar-sm rounded-circle align-self-center"
                                            src={avatarUrl}
                                            alt={name}
                                        />

                                        <div className="flex-grow-1">
                                            <h5 className="m-0">
                                                <Link to={`/authors/${slug}`}>{name}</Link>
                                            </h5>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                        <p className="text-muted mb-0 fs-14">{currentPostTitle}</p>
                    </Col>
                    <Col lg={{ offset: 1, span: 2 }} className="text-lg-end text-start col-6">
                        <OverlayTrigger placement="top" overlay={nextPostPopover}>
                            <Link to="#" className="btn btn-white">
                                <span className="d-none d-sm-inline-flex">Next Post</span>
                                <i className="icon-xs icon-right-arrow ms-2"></i>
                            </Link>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PostNavigation;
