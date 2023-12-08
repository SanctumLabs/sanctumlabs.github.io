import { Children, FC, ReactNode } from 'react';
import { OverlayTrigger } from 'react-bootstrap';

type OverLayTriggerProps = {
    overlay: JSX.Element;
    children: typeof Children | ReactNode;
    placement? :
        | 'auto'
        | 'auto-start'
        | 'auto-end'
        | 'top'
        | 'bottom'
        | 'right'
        | 'left'
        | 'top-start'
        | 'top-end'
        | 'bottom-start'
        | 'bottom-end'
        | 'right-start'
        | 'right-end'
        | 'left-start'
        | 'left-end';
};

const OverLayTrigger: FC<OverLayTriggerProps> = ({ overlay, children, placement = 'top' }) => {
    return (
        <OverlayTrigger placement={placement} overlay={overlay}>
            <>{children}</>
        </OverlayTrigger>
    );
};

export default OverLayTrigger;
