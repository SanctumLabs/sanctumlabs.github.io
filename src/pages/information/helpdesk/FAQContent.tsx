import { FC } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import CustomToggle from 'components/customtoggle';

type FaqProps = {
    faqs: Faq[];
}

const FAQContent: FC<FaqProps> = ({ faqs }) => {
    return (
        <div id="faqContent">
            <Accordion defaultActiveKey="0" className="custom-accordionwitharrow" id="accordionExample">
                {(faqs || []).map(({ question, answer }, index) => {
                    return (
                        <Card className="mb-2 border rounded-sm" key={index.toString()}>
                            <CustomToggle
                                eventKey={String(index)}
                                containerClass="my-1 fw-medium"
                                linkClass="text-dark"
                            >
                                {question}
                            </CustomToggle>
                            <Accordion.Collapse eventKey={String(index)}>
                                <Card.Body className="text-muted pt-1">{answer}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default FAQContent;
