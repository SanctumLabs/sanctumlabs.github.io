import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { FC } from 'react';

type FaqHelpLinksProps = {
    helpLinks: FaqHelpLink[];
};

const FaqHelpLinks: FC<FaqHelpLinksProps> = ({ helpLinks }) => {
    return (
        <Row>
            {(helpLinks || []).map(({icon, title, links, link }, index) => {
                return (
                    <Col key={index.toString()} md={4}>
                        <div className="mb-5 mb-lg-0">
                            <span className="icon icon-sm text-primary">
                                <FeatherIcon icon={icon} className="icon-dual-primary" />
                            </span>
                            <h4 className="mt-4 fw-semibold mb-0">{title}</h4>
                            <ul className="list-unstyled text-muted mb-4">
                                {(links || []).map((itemLink, index) => {
                                    return (
                                        <li key={index.toString()} className="my-3">
                                            <Link to={itemLink} className="text-muted">
                                                {itemLink}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <Link to={link} className="text-primary fw-medium">
                                View More <FeatherIcon className="icon-xs ms-1" icon="chevron-right" />
                            </Link>
                        </div>
                    </Col>
                );
            })}
        </Row>
    );
};

export default FaqHelpLinks;
